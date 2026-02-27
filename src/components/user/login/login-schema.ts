import { z } from "zod";

export const loginSchema = z.object({
    identifier: z
        .string()
        .email("Digite um e-mail válido"),

    password: z
        .string()
        .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
