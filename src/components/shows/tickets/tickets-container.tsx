"use client"

import { Accordion } from "@/components/ui/accordion"
import { TicketSectorCollapse } from "./ticket-sector-collapse"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { useCartStore } from "@/store/cart-store"
import { AlertCircle, Trash2 } from "lucide-react"

export function TicketsContainer({ event, sectors }: any) {
  const router = useRouter()
  const { items, getTotal, getTax, clearCart, hasHydrated } = useCartStore()


  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  async function handleContinue() {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      router.push(`/login?redirect=/finalizar-compra`)
      return
    }

    router.push("/finalizar-compra")
  }

  const clearItems = () => {
    clearCart()
  }

  return (
    <>
      <div id="ingressos" className="w-full max-w-3xl mx-auto pb-32">
        {sectors && sectors.length > 0 ? (
          <Accordion type="multiple" className="w-full space-y-4">
            {sectors.map((sector: any) => (
              <TicketSectorCollapse
                key={sector.id}
                sector={sector}
                event={event}
              />
            ))}
          </Accordion>
        ) : (
          /* MENSAGEM DE ESGOTADO */
          <div className="w-full p-10 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center bg-gray-50 my-4">
            <AlertCircle className="text-red-500 mb-2" size={40} />
            <h3 className="font-bold text-gray-800 uppercase tracking-widest text-xl">
              Evento Esgotado
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Não há ingressos disponíveis para este evento no momento.
            </p>
          </div>
        )}
      </div>

      {hasHydrated && totalItems > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-green-600/90 backdrop-blur-md text-white z-50 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

            <div>
              <p className="text-sm opacity-90">
                {totalItems} {totalItems === 1 ? "item" : "itens"} no carrinho
              </p>

              <p className="text-2xl font-semibold leading-tight">
                R$ {getTotal().toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>

              <p className="text-xs opacity-80">
                Taxa: R$ {getTax().toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
            </div>

            <div className="flex items-center gap-10">


              <button
                onClick={handleContinue}
                className="cursor-pointer bg-white text-green-700 px-5 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 transition active:scale-95"
              >
                Continuar →
              </button>
              <button
                onClick={() => clearItems()}
                className="flex items-center justify-center w-10 h-10 rounded-lg  transition active:scale-95"
              >
                <Trash2 className="w-5 h-5 text-white" />
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  )
}