"use client"

import { useEffect, useState } from "react"
import { Logo } from "../header/logo"
import { CartIcon } from "../header/cart-icon"
import { supabase } from "@/lib/supabase/client"

export function HeaderCart() {
    const [userName, setUserName] = useState<string | null>(null)

    useEffect(() => {
        // Função para buscar usuário
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUserName(user?.user_metadata?.nome || user?.email || null)
        }

        getUser()

        // Escuta mudanças no auth (Login/Logout) para atualizar o nome em tempo real
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUserName(session?.user?.user_metadata?.nome || session?.user?.email || null)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <header className="w-full bg-black py-3 px-6 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Logo />

                <div className="flex items-center gap-6 text-white text-sm">
                    {userName && (
                        <p className="hidden sm:block">
                            Olá, <span className="font-semibold">{userName}</span>
                        </p>
                    )}


                    <CartIcon />
                </div>
            </div>
        </header>
    )
}