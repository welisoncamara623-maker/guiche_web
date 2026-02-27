"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { CartIcon } from "./cart-icon";
import { supabase } from "@/lib/supabase/client";

export function NavActions() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState<string | null>(null);

    const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""
        }`;

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                const nome = session.user.user_metadata?.nome;
                setUserName(nome ? nome.split(" ")[0] : session.user.email);
            } else {
                setUserName(null);
            }
            setLoading(false);
        });

        supabase.auth.getSession().then(({ data }) => {
            if (data.session?.user) {
                const nome = data.session.user.user_metadata?.nome;
                setUserName(nome ? nome.split(" ")[0] : data.session.user.email);
            }
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    async function handleLogout() {
        await supabase.auth.signOut();
        router.refresh();
    }

    if (loading) return null;

    return (
        <div className="flex items-center gap-6">
            {!userName ? (
                <button
                    onClick={() =>
                        router.push(`/login?redirect=${encodeURIComponent(currentUrl)}`)
                    }
                    className="border border-white text-white px-8 py-1.5 rounded-md text-sm font-bold uppercase hover:bg-white hover:text-black transition-all"
                >
                    Entrar
                </button>
            ) : (
                <div className="flex items-center gap-4">
                    <span className="text-white text-sm">
                        Olá, <strong>{userName}</strong>
                    </span>

                    <button
                        onClick={handleLogout}
                        className="border border-white text-white px-5 py-1.5 rounded-md text-xs font-bold uppercase hover:bg-white hover:text-black transition-all"
                    >
                        Sair
                    </button>
                    <CartIcon />
                </div>
            )}
        </div>
    );
}
