import { getBlackAuthHeader } from "@/lib/checkout/black-payment"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { cart, customer } = body

        if (!cart || !cart.items?.length) {
            return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 })
        }

        // 1. Recalcular Subtotal
        const subtotal = cart.items.reduce(
            (acc: number, item: any) => acc + (item.price * item.quantity),
            0
        )

        // 2. Calcular Taxa (Exemplo: 10% ou use o valor vindo do cart.tax se confiar)
        // Se você quiser usar a taxa exata do frontend:
        const totalComTaxa = subtotal + (cart.tax || 0);

        // 3. Converter para centavos (Inteiro)
        const amountInCents = Math.round(totalComTaxa * 100)

        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
        console.log("Itens do carrinho:", cart.items)
        const payload = {
            amount: amountInCents,
            paymentMethod: "pix",
            installments: 1,

            pix: {
                expiresInDays: 1
            },
            items: cart.items.map((item: any) => ({
                title: `${item.eventTitle} - ${item.ticketName}`,
                quantity: item.quantity,
                unitPrice: Math.round(item.price * 100),
                tangible: false,
            })),

            customer: {
                name: customer.name,
                email: customer.email,
                type: "individual",
                document: {
                    type: "cpf",
                    number: customer.document,
                },
            },

            metadata: JSON.stringify({
                items: cart.items.length,
            }),

            returnUrl: `${baseUrl}/meus-pedidos?success=true`,
            postbackUrl: `${baseUrl}/api/webhook/black`,
        }

        console.log("🚀 Payload enviado para Black:", payload);
        const response = await fetch(
            "https://api.blackpayments.pro/v1/transactions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getBlackAuthHeader(),
                },
                body: JSON.stringify(payload),
            }
        )

        const data = await response.json()

        if (!response.ok) {
            console.error("Erro Black Payments - status:", response.status);
            console.error("Erro Black Payments - body:", data);

            return NextResponse.json(
                {
                    error: data.message || data.error || "Falha na comunicação com o provedor",
                    providerResponse: data,
                },
                { status: response.status }
            );
        }
        // Retornamos os dados da transação (que contém o paymentUrl ou qrCode)
        return NextResponse.json(data)

    } catch (error) {
        console.error("Checkout internal error:", error)
        return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 })
    }
}