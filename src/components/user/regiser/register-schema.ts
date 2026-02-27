import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    cpf: z.string().min(11, "CPF inválido").max(14, "CPF inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;