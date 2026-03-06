"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, X, Camera, Ticket } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { useCartStore } from "@/store/cart-store"
import { ModalComfirmPurchase } from "../my-orders/modal-comfirm-purchase"

export default function CartContainer() {
    const router = useRouter()
    const { items, removeItem, getTotal, getTax } = useCartStore()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    async function handlePayment() {
        if (!items || items.length === 0) return

        try {
            setLoading(true)

            const { data: { user }, error } = await supabase.auth.getUser()

            if (error || !user) {
                router.push("/login?redirect=/finalizar-compra")
                return
            }

            // Captura o CPF salvo no metadado 'documento' que criamos no Register
            const userCpf = user.user_metadata?.documento

            if (!userCpf) {
                console.warn("Usuário sem CPF no cadastro")
            }
            console.log("ITEMS NO CHECKOUT:", items)
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cart: {
                        items,
                        tax: getTax(),
                        total: getTotal()
                    },
                    customer: {
                        name: user.user_metadata?.nome || user.email,
                        email: user.email,
                        document: userCpf
                    }
                })
            })
            console.log(response)


            const dataResponse = await response.json()

            if (!response.ok) {
                throw new Error(dataResponse.error || "Erro ao criar pagamento")
            }

            if (dataResponse.pix) {
                localStorage.setItem(
                    `pix_${dataResponse.id}`,
                    JSON.stringify(dataResponse)
                )

                router.push(`/pix/${dataResponse.id}`)
                return
            }

            // Caso a API retorne os dados do PIX diretamente (se for checkout transparente)
            if (dataResponse.pix?.qrcode) {
                // Aqui você redirecionaria para uma tela de sucesso/pix ou abriria um modal
                router.push(`/sucesso?id=${dataResponse.id}`)
                return
            }

        } catch (error) {
            console.error(error)
            alert("Erro ao processar pagamento. Tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full bg-gray-100 min-h-screen font-sans text-gray-800 py-4">
            <div className="max-w-[95%] md:max-w-5xl mx-auto bg-white shadow-sm border border-gray-200 rounded-sm">
                <div className="py-8 border-b border-gray-200">
                    <h1 className="text-4xl font-light text-center text-gray-700">
                        Carrinho
                    </h1>
                </div>

                <div className="px-4 py-8">
                    <p className="text-center mb-6 text-sm">
                        Você tem{" "}
                        <span className="font-bold">
                            {items.length} item(s)
                        </span>{" "}
                        no seu carrinho
                    </p>

                    {/* Cabeçalho */}
                    <div className="hidden md:flex justify-between text-[11px] uppercase tracking-wider text-gray-400 font-semibold px-4 mb-2">
                        <div className="w-1/2">Ingresso</div>
                        <div className="w-1/4 text-center">Quantidade</div>
                        <div className="w-1/4 text-right">Valor</div>
                    </div>

                    <div className="border-t border-gray-200">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div
                                    key={item.ticketId}
                                    className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-4"
                                >
                                    <div className="flex items-start gap-6 w-full md:w-1/2">
                                        <div className="bg-[#333] p-3 rounded-lg text-white shadow-sm">
                                            <Ticket size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="font-bold text-[15px] flex items-center gap-2">
                                                {item.eventTitle} - {item.eventDate}
                                                <Camera
                                                    size={14}
                                                    className="text-blue-500 cursor-pointer"
                                                />
                                            </h2>
                                            <p className="text-[14px] text-gray-500 font-medium">
                                                Ingresso: {item.ticketName}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/4 flex justify-center">
                                        <div className="cursor-not-allowed bg-[#f0f0f0] border border-gray-300 rounded px-3 py-1 text-sm w-20 text-center select-none">
                                            {item.quantity}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/4 flex items-center justify-end gap-4">
                                        <span className="font-bold text-[15px]">
                                            R${" "}
                                            {(item.price * item.quantity).toLocaleString(
                                                "pt-BR",
                                                { minimumFractionDigits: 2 }
                                            )}
                                        </span>

                                        <button
                                            onClick={() =>
                                                removeItem(item.ticketId)
                                            }
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                            title="Remover item"
                                        >
                                            <X
                                                size={20}
                                                className="bg-gray-300 text-white rounded-full p-0.5 hover:bg-gray-400"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-10 text-center text-gray-500">
                                Seu carrinho está vazio.
                            </div>
                        )}
                    </div>

                    {/* Totais */}
                    <div className="mt-6 space-y-3 pr-4">
                        <div className="flex justify-end gap-12 items-center text-sm">
                            <span className="font-bold uppercase tracking-tighter text-gray-600">
                                Taxa de Serviço:
                            </span>
                            <span className="font-bold w-24 text-right">
                                R$ {getTax().toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2
                                })}
                            </span>
                        </div>

                        <div className="flex justify-end gap-12 items-center">
                            <span className="font-bold uppercase tracking-tighter text-gray-600">
                                TOTAL:
                            </span>
                            <span className="font-bold text-lg w-24 text-right">
                                R$ {getTotal().toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2
                                })}
                            </span>
                        </div>
                    </div>

                    <p className="text-center text-[13px] text-blue-500 mt-12 mb-8 cursor-pointer hover:underline">
                        <span className="text-gray-500">
                            Ao clicar no botão FINALIZAR, você concorda com os
                        </span>{" "}
                        termos do contrato
                    </p>
                </div>

                {/* Rodapé (Agora dentro do card branco) */}
                <div className="border-t border-gray-200 bg-white p-6">
                    <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 border border-gray-300 px-8 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-all active:scale-95"
                        >
                            <ChevronLeft size={16} /> Voltar
                        </button>

                        <button
                            onClick={() => setOpenModal(true)}
                            disabled={loading}
                            className="flex items-center justify-center gap-3 bg-black text-white px-6 md:px-10 py-3 rounded text-sm font-bold hover:bg-zinc-800 transition-all active:scale-95 w-full max-w-md disabled:opacity-60"
                        >
                            {loading ? "Processando..." : "Finalizar"}{" "}
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
            <ModalComfirmPurchase
                open={openModal}
                setOpen={setOpenModal}
                onConfirm={handlePayment}
            />
        </div>
    )
}