"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"

export function ModalComfirmPurchase({ open, setOpen, onConfirm }: any) {
    const [editingEmail, setEditingEmail] = useState(false)
    const [customerEmail, setCustomerEmail] = useState("")
    const [loadingUser, setLoadingUser] = useState(false)

    // 🔥 Busca o email do usuário quando o modal abrir
    useEffect(() => {
        async function getUserEmail() {
            if (!open) return

            try {
                setLoadingUser(true)

                const {
                    data: { user },
                } = await supabase.auth.getUser()

                if (user?.email) {
                    setCustomerEmail(user.email)
                }
            } catch (error) {
                console.error("Erro ao buscar usuário:", error)
            } finally {
                setLoadingUser(false)
            }
        }

        getUserEmail()
    }, [open])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        Confirmar envio dos ingressos
                    </DialogTitle>

                    <DialogDescription className="pt-2 text-base text-center">
                        Seus ingressos serão enviados automaticamente após a confirmação
                        do pagamento para o email abaixo.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Email para recebimento
                        </label>

                        {loadingUser ? (
                            <div className="text-sm text-muted-foreground">
                                Carregando email...
                            </div>
                        ) : editingEmail ? (
                            <Input
                                type="email"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                className="rounded-lg"
                            />
                        ) : (
                            <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-muted/30">
                                <span className="text-sm truncate">
                                    {customerEmail}
                                </span>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setEditingEmail(true)}
                                >
                                    Editar
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* 🔥 Botões um abaixo do outro */}
                <DialogFooter className="mt-8 flex flex-col gap-3">
                    <Button
                        className="w-full"
                        onClick={() => {
                            setOpen(false)
                            onConfirm(customerEmail)
                        }}
                        disabled={!customerEmail}
                    >
                        Continuar para pagamento
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}