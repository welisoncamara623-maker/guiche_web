"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"

export function CartIcon() {
    const [cartCount, setCartCount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        function loadCart() {
            const storedCart = localStorage.getItem("cart")
            if (!storedCart) {
                setCartCount(0)
                return
            }

            const parsed = JSON.parse(storedCart)
            const totalItems = parsed.items?.reduce(
                (acc: number, item: any) => acc + item.quantity,
                0
            ) || 0

            setCartCount(totalItems)
        }

        loadCart()

        // Escuta mudanças no localStorage em outras abas ou eventos manuais
        window.addEventListener("storage", loadCart)
        // Opcional: Escuta um evento customizado se você atualizar o cart na mesma aba
        window.addEventListener("cartUpdated", loadCart)

        return () => {
            window.removeEventListener("storage", loadCart)
            window.removeEventListener("cartUpdated", loadCart)
        }
    }, [])

    return (
        <div
            className="relative cursor-pointer group"
            onClick={() => router.push("/finalizar-compra")}
        >
            <ShoppingCart className="text-white group-hover:opacity-70 transition" />

            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center">
                    {cartCount}
                </span>
            )}
        </div>
    )
}