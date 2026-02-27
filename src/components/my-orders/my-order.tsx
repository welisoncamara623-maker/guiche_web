"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Ticket, Clock, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Header } from "../header/header"


export default function MyOrders() {
    const searchParams = useSearchParams()
    const [pedidos, setPedidos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const success = searchParams.get("success")
        if (success === "true") {
            toast.success("Compra realizada com sucesso!", {
                description: "Você receberá um e-mail com os detalhes em instantes.",
                duration: 5000,
            })
        }

        async function fetchPedidos() {
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                const { data, error } = await supabase
                    .from('ingressos')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (!error) setPedidos(data || [])
            }
            setLoading(false)
        }

        fetchPedidos()
    }, [searchParams])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f1f1f1]">
                <div className="animate-pulse font-bold text-gray-400 uppercase tracking-widest">
                    Carregando ingressos...
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f1f1f1] pb-20">

            <main className="max-w-4xl mx-auto px-4 space-y-4">
                {pedidos.length === 0 ? (
                    <Card className="border-none shadow-sm py-20 text-center">
                        <CardContent>
                            <Ticket className="mx-auto text-gray-200 mb-4" size={64} />
                            <h3 className="text-xl font-bold text-gray-700">Nenhum ingresso encontrado</h3>
                            <p className="text-gray-500 mt-2">Suas compras aparecerão aqui assim que o pagamento for confirmado.</p>
                        </CardContent>
                    </Card>
                ) : (
                    pedidos.map((pedido) => (
                        <Card key={pedido.id} className="border-none shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-0 flex flex-col md:flex-row">
                                {/* Status Lateral */}
                                <div className={`w-2 ${pedido.status === 'paid' ? 'bg-[#00a651]' : 'bg-yellow-500'}`} />

                                <div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div className="flex items-center gap-6 w-full md:w-auto">
                                        <div className="bg-gray-100 p-4 rounded-xl text-gray-400">
                                            <Ticket size={32} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${pedido.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {pedido.status === 'paid' ? 'Confirmado' : 'Pendente'}
                                                </span>
                                                <span className="text-gray-400 text-[10px]">#{pedido.id.slice(0, 8)}</span>
                                            </div>
                                            <h2 className="font-bold text-lg text-gray-800 leading-tight">
                                                {pedido.event_title}
                                            </h2>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {pedido.ticket_name} • {pedido.quantity}x
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end w-full md:w-auto border-t md:border-none pt-4 md:pt-0">
                                        <span className="text-2xl font-black text-gray-900">
                                            R$ {Number(pedido.total_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                        </span>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                            <Clock size={12} />
                                            <span>{new Date(pedido.created_at).toLocaleDateString('pt-BR')}</span>
                                        </div>
                                    </div>

                                    <ChevronRight className="text-gray-300 hidden md:block" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </main>
        </div>
    )
}