"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { RegisterFormData, registerSchema } from "./register-schema";
import { toast } from "sonner"

export function Register() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get("redirect") || "/";

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            cpf: "",
            password: "",
        },
    });
    const handleRegister = async (formData: RegisterFormData) => {
        const loadingToast = toast.loading("Criando sua conta...");

        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        nome: formData.name,
                        documento: formData.cpf.replace(/\D/g, ""),
                    },
                },
            });

            if (error) {
                toast.dismiss(loadingToast);
                toast.error(error.message);
                return;
            }

            // 🔐 Garante sessão válida após cadastro
            const { data: sessionData } = await supabase.auth.getSession();

            toast.dismiss(loadingToast);

            // ⚠️ Se confirmação de email estiver ativada
            if (!sessionData.session) {
                toast.success("Conta criada! Verifique seu e-mail.");
                router.push("/login");
                return;
            }

            toast.success("Bem-vindo(a)!");

            const destination =
                redirectTo && redirectTo.startsWith("/")
                    ? redirectTo
                    : "/";

            router.push(destination);
        } catch (err) {
            toast.dismiss(loadingToast);
            console.error(err);
            toast.error("Erro inesperado ao criar conta.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f1f1f1] px-4">
            <Card className="w-full max-w-85 rounded-xl border-none bg-white shadow-[6px_6px_0px_0px_#00a651]">
                <CardHeader className="flex items-center justify-center py-4">
                    <Image src="/logo-preta.png" alt="Logo" width={160} height={40} priority />
                </CardHeader>

                <CardContent className="px-4 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Seu Nome" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Seu E-mail" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* NOVO CAMPO CPF */}
                            <FormField
                                control={form.control}
                                name="cpf"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Seu CPF (apenas números)"
                                                maxLength={11}
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

                            <Button
                                type="submit"
                                className="mt-2 h-12 w-full rounded-lg bg-[#00a651] text-sm font-bold uppercase tracking-wide hover:bg-[#008c44]"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ? "Processando..." : "Criar conta e Continuar"}
                            </Button>

                            <div className="pt-3 text-center text-sm text-gray-700">
                                Já tem conta?{" "}
                                <Link
                                    href={`/login?redirect=${encodeURIComponent(redirectTo)}`}
                                    className="font-semibold text-[#00a651] hover:underline"
                                >
                                    Entrar
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}