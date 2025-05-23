import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("El email es obligatorio y debe ser válido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
