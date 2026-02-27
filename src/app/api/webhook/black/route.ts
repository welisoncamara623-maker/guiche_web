
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const event = await req.json()

        console.log("Webhook completo:", event)

        const status =
            event.status ||
            event.data?.status ||
            event.transaction?.status

        const transactionId =
            event.id ||
            event.data?.id ||
            event.transaction?.id

        console.log("Webhook Black:", transactionId, status)

        if (status === "paid") {
            console.log("Pagamento aprovado:", transactionId)
        }

        return NextResponse.json({ received: true })
    } catch (err) {
        return NextResponse.json({ error: "Webhook error" }, { status: 400 })
    }
}