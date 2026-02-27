import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
    ticketId: string
    eventTitle: string
    eventDate: string
    location: string
    city: string
    sectorTitle: string
    ticketName: string
    lote: string
    price: number
    quantity: number
}

type CartState = {
    items: CartItem[]
    hasHydrated: boolean
    setHasHydrated: (state: boolean) => void

    addItem: (item: CartItem) => void
    removeItem: (ticketId: string) => void
    clearCart: () => void
    getSubtotal: () => number
    getTax: () => number
    getTotal: () => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            hasHydrated: false,
            setHasHydrated: (state) => set({ hasHydrated: state }),

            addItem: (item) => {
                const existing = get().items.find(
                    (i) => i.ticketId === item.ticketId
                )

                if (existing) {
                    set({
                        items: get().items.map((i) =>
                            i.ticketId === item.ticketId
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    })
                } else {
                    set({ items: [...get().items, item] })
                }
            },

            removeItem: (ticketId) => {
                set({
                    items: get().items.filter((i) => i.ticketId !== ticketId),
                })
            },

            clearCart: () => set({ items: [] }),

            getSubtotal: () =>
                get().items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                ),

            getTax: () => get().getSubtotal() * 0.1,

            getTotal: () => get().getSubtotal() + get().getTax(),
        }),
        {
            name: "ticket-cart",

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true)
            },
        }
    )
)