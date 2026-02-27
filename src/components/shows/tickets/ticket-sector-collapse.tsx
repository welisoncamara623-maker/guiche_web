"use client"

import { Minus, Plus, ShoppingCart, Info, ChevronDown, AlertCircle } from "lucide-react"
import {
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCartStore } from "@/store/cart-store"
import { useState } from "react";
import { FindOutMoreDialog } from "./fin-out-more-dialog";

export function TicketSectorCollapse({ sector, event }: any) {
    const { items, addItem, removeItem } = useCartStore()
    const [openDialog, setOpenDialog] = useState(false);

    const findOutMore = () => {
        setOpenDialog(true);
    };

    if (!sector.tickets || sector.tickets.length === 0) {
        return (
            <div className="w-full p-6 border-2 border-dashed border-gray-200 rounded-md flex flex-col items-center justify-center bg-gray-50 mb-4">
                <AlertCircle className="text-gray-400 mb-2" size={32} />
                <h3 className="font-bold text-gray-600 uppercase tracking-wider italic">
                    Setor {sector.title || "Indisponível"}
                </h3>
                <p className="text-red-500 font-black text-sm uppercase">
                    Evento Esgotado neste setor
                </p>
            </div>
        )
    }

    const getQuantity = (ticketId: string) =>
        items.find((i) => i.ticketId === ticketId)?.quantity || 0

    const sectorTotal = sector.tickets.reduce(
        (acc: number, ticket: any) => acc + getQuantity(ticket.id),
        0
    )

    const fromPrice = Math.min(...sector.tickets.map((t: any) => t.price))
    const isSpecialSector = sector.description && sector.description.length > 0;

    return (
        <>
            <AccordionItem
                value={sector.id}
                className="overflow-hidden rounded-md border border-gray-200 mb-4"
            >
                <AccordionTrigger
                    className={`px-5 py-5 hover:no-underline transition-all duration-300 bg-[#eeeeee] text-[#444444] data-[state=open]:bg-[#777777] data-[state=open]:text-white`}
                >
                    <div className="flex items-start gap-4 w-full relative">
                        <div className={`w-5 h-5 ${sector.color} rounded-sm mt-1 shrink-0`} />

                        <div className="flex flex-col text-left flex-1">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-xl tracking-tight">
                                    {sector.title || sector.tickets[0]?.name.split(' (')[0]}
                                </span>

                                {sectorTotal > 0 && (
                                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                        <ShoppingCart size={12} fill="white" />
                                        {sectorTotal}
                                    </span>
                                )}
                            </div>

                            {sector.description && (
                                <span className="text-sm font-light mt-1 leading-tight opacity-90">
                                    {sector.description}
                                </span>
                            )}

                            {sector.tickets.every((t: any) => t.esgoted) && (
                                <span className="text-[10px] font-bold mt-1 uppercase tracking-wider text-red-500">
                                    (ESGOTADO)
                                </span>
                            )}

                            {!isSpecialSector && fromPrice > 0 && (
                                <span className="text-[13px] mt-1 text-gray-500 font-medium">
                                    a partir de R$ {fromPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </span>
                            )}

                            {isSpecialSector && fromPrice > 0 && (
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[11px] font-light opacity-80">
                                        a partir de R$ {fromPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                    </span>
                                    <Info size={14} className="opacity-80" />
                                </div>
                            )}
                        </div>

                        <div className="ml-2 mt-1">
                            <ChevronDown size={20} className="shrink-0 transition-transform duration-200" />
                        </div>
                    </div>
                </AccordionTrigger>

                <AccordionContent className="bg-white p-0">
                    {sector.tickets.map((ticket: any) => {
                        const quantity = getQuantity(ticket.id)
                        const isEsgotado = ticket.esgoted

                        return (
                            <div
                                key={ticket.id}
                                className={`flex justify-between items-center px-6 py-5 border-t border-gray-100 ${isEsgotado ? 'opacity-60' : ''}`}
                            >
                                <div className="flex flex-col gap-0.5 text-[#555555]">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[14px]">
                                            <span className="text-gray-400">Ingresso:</span> <strong>{ticket.name}</strong>
                                        </span>
                                        {ticket.saibaMais && (
                                            <button
                                                onClick={findOutMore}
                                                className="bg-[#007bff] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase"
                                            >
                                                Saiba Mais
                                            </button>
                                        )}
                                    </div>
                                    <span className="text-[14px]">
                                        <span className="text-gray-400">Lote:</span> <strong>{ticket.lote}</strong>
                                    </span>
                                    <span className="text-[14px]">
                                        <span className="text-gray-400">Valor:</span> <strong>R$ {ticket.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong>
                                        <span className="text-gray-400 text-[12px]"> + taxa</span>
                                        {isEsgotado && (
                                            <span className="text-red-600 font-bold ml-2 uppercase text-[12px]"> (ESGOTADO)</span>
                                        )}
                                    </span>
                                </div>

                                {/* Controles de Quantidade */}
                                {!isEsgotado && (
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() =>
                                                quantity > 1
                                                    ? addItem({ ...ticket, quantity: -1 })
                                                    : removeItem(ticket.id)
                                            }
                                            disabled={quantity === 0}
                                            className={`p-1 rounded-full transition-colors ${quantity > 0 ? 'bg-gray-100 text-black' : 'text-gray-300'}`}
                                        >
                                            <Minus size={22} strokeWidth={3} />
                                        </button>

                                        <span className="w-4 text-center text-lg font-bold">
                                            {quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                addItem({
                                                    ticketId: ticket.id,
                                                    eventTitle: event.title,
                                                    eventDate: event.date,
                                                    location: event.city,
                                                    city: event.location,
                                                    sectorTitle: sector.title,
                                                    ticketName: ticket.name,
                                                    lote: ticket.lote,
                                                    price: ticket.price,
                                                    quantity: 1,
                                                })
                                            }
                                            className="p-1 rounded-full bg-gray-100 text-black hover:bg-gray-200"
                                        >
                                            <Plus size={22} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </AccordionContent>
            </AccordionItem>
            <FindOutMoreDialog
                open={openDialog}
                onOpenChange={setOpenDialog}
            />
        </>
    )
}