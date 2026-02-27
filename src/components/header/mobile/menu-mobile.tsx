"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LogIn,
  Menu,
  UserPlus,
  User,
  Ticket,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export function MenuMobile() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.refresh();
  }

  if (loading) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white p-2 border border-gray-700 rounded-md">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="bg-black text-white border-none pt-6 pb-8"
      >
        <div className="flex flex-col gap-3 px-4">

          {!user ? (
            <>
              <Link
                href="/login"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <LogIn size={18} />
                Entrar
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <UserPlus size={18} />
                Cadastrar-se
              </Link>
            </>
          ) : (
            <>
              <div className="px-4 py-2 text-sm opacity-70">
                Olá,{" "}
                <strong>
                  {user.user_metadata?.nome?.split(" ")[0] ||
                    user.email}
                </strong>
              </div>

              <Link
                href="/shoppings/success"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <User size={18} />
                Meus pedidos
              </Link>
              <Link
                href="/finalizar-compra"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <ShoppingBag size={18} />
                Meu carrinho
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-red-500/20 transition text-red-400"
              >
                <LogOut size={18} />
                Sair
              </button>
            </>
          )}

        </div>
      </SheetContent>
    </Sheet>
  );
}