"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { LoginFormData, loginSchema } from "./login-schema";


export function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get("redirect") || "/";

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    });

    const handleLogin = async (formData: LoginFormData) => {
        const loadingToast = toast.loading("Entrando...");

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: formData.identifier,
                password: formData.password,
            });

            if (error) {
                toast.dismiss(loadingToast);
                toast.error("E-mail ou senha inválidos");
                return;
            }

            // 🔐 Garante que a sessão foi realmente criada
            const { data: sessionData } = await supabase.auth.getSession();

            if (!sessionData.session) {
                toast.dismiss(loadingToast);
                toast.error("Erro ao validar sessão. Tente novamente.");
                return;
            }

            toast.dismiss(loadingToast);
            toast.success("Login realizado com sucesso!");

            // 🔒 Segurança: garante que o redirect é interno
            const destination =
                redirectTo && redirectTo.startsWith("/")
                    ? redirectTo
                    : "/";

            router.push(destination);
        } catch (err) {
            toast.dismiss(loadingToast);
            console.error(err);
            toast.error("Erro inesperado. Tente novamente.");
        }
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f1f1f1] px-4">
            <Card className="w-full max-w-85 rounded-xl border-none bg-white shadow-[6px_6px_0px_0px_#00a651]">
                <CardHeader className="flex items-center justify-center py-4">
                    <Image
                        src="/logo-preta.png"
                        alt="Logo do Guichê Web"
                        width={160}
                        height={40}
                        priority
                    />
                </CardHeader>

                <CardContent className="px-4 pb-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleLogin)}
                            className="space-y-3"
                        >
                            <FormField
                                control={form.control}
                                name="identifier"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Seu E-mail"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Senha"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="text-left">
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-[#00a651] hover:underline"
                                >
                                    Esqueceu a senha?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                className="mt-2 h-12 w-full rounded-lg bg-[#00a651] text-sm font-bold uppercase tracking-wide hover:bg-[#008c44]"
                            >
                                {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
                            </Button>

                            <div className="pt-3 text-center text-sm text-gray-700">
                                Não tem conta?{" "}
                                <Link
                                    // AQUI: Mantemos o redirect vivo caso ele vá para o cadastro
                                    href={`/register?redirect=${encodeURIComponent(redirectTo)}`}
                                    className="font-semibold text-[#00a651] hover:underline"
                                >
                                    Cadastre-se
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}