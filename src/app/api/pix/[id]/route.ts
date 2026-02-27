import { NextRequest, NextResponse } from "next/server"
import { getBlackAuthHeader } from "@/lib/checkout/black-payment"

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params
        const numericId = Number(id)

        if (isNaN(numericId)) {
            return NextResponse.json(
                { error: "ID inválido" },
                { status: 400 }
            )
        }

        const response = await fetch(
            `https://api.blackpayments.pro/v1/transactions/${numericId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getBlackAuthHeader(),
                },
            }
        )

        const data = await response.json()

        return NextResponse.json(data, { status: response.status })

    } catch (error) {
        console.error("Erro interno PIX:", error)
        return NextResponse.json(
            { error: "Erro ao buscar PIX" },
            { status: 500 }
        )
    }
}