"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import QRCode from "qrcode"
import { Skeleton } from "../ui/skeleton"

export default function PixContainer() {
    const { id } = useParams()
    const router = useRouter()
    const [pixData, setPixData] = useState<any>(null)
    const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPix() {
            try {
                const res = await fetch(`/api/pix/${id}`)
                const data = await res.json()

                console.log("PIX COMPLETO DA API:", data)

                setPixData(data)

                if (data.pix?.qrcode) {
                    const qr = await QRCode.toDataURL(data.pix.qrcode)
                    setQrCodeUrl(qr)
                }

            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchPix()
    }, [id])

    function handleCancel() {
        router.push("/finalizar-compra")
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-4 px-4">
                <div className="w-full md:max-w-2xl bg-white border border-gray-200 rounded-sm shadow-sm p-4 space-y-6">

                    <Skeleton className="h-8 w-48 mx-auto" />

                    <div className="space-y-2">
                        <Skeleton className="h-16 w-full rounded-sm" />
                    </div>

                    <div className="flex justify-center">
                        <Skeleton className="w-56 h-56 rounded-xl" />
                    </div>

                    <Skeleton className="h-20 w-full rounded-lg" />

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Skeleton className="h-12 w-full rounded-xl" />
                        <Skeleton className="h-12 w-full rounded-xl" />
                    </div>

                    <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
            </div>
        )


    } if (!pixData) return <p>Erro ao carregar PIX</p>

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-4 px-4">

            <div className="w-full md:max-w-2xl bg-white border border-gray-200 rounded-sm shadow-sm p-4">

                <h1 className="text-2xl font-semibold text-black text-center border-b border-gray-100 pb-6">
                    Pagamento via PIX
                </h1>

                <div className="mt-6 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-sm">
                        <span className="uppercase font-bold tracking-tighter text-gray-500">Valor</span>
                        <span className="font-bold text-lg text-black">
                            R$ {(pixData.amount / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>

                {qrCodeUrl && (
                    <div className="mt-8 flex justify-center">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <img
                                src={qrCodeUrl}
                                alt="QR Code PIX"
                                className="w-56 h-56"
                            />
                        </div>
                    </div>
                )}

                {pixData?.pix?.qrcode && (
                    <div className="mt-6">
                        <p className="text-xs text-gray-500 mb-2 font-medium">
                            Copia e cola:
                        </p>

                        <textarea
                            readOnly
                            value={pixData.pix.qrcode}
                            className="w-full text-xs p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50"
                            rows={3}
                        />
                    </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                    <button
                        onClick={handleCancel}
                        className="w-full py-3 rounded-xl border border-black text-black font-semibold transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98]"
                    >
                        Cancelar pagamento
                    </button>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(pixData.pix.qrcode)
                        }}
                        className="w-full py-3 rounded-xl bg-black text-white font-semibold transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98]"
                    >
                        Copiar código PIX
                    </button>

                </div>
                <p className="mt-8 text-[11px] text-gray-400 text-center uppercase tracking-wide">
                    O pagamento será confirmado automaticamente após a compensação.
                </p>
            </div>
        </div>
    )
}