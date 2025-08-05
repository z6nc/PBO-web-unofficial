import { z } from "zod";


export const PublicitateSchema = z.object({
    nombreUsuario: z.string().min(8, { message: "Mínimo 6 caracteres" }),
    correoElectronico: z.string().email({ message: "Correo electrónico no válido" }),
    telefono: z
        .string()
        .length(9, { message: "El número debe tener exactamente 9 dígitos" })
        .startsWith("9", { message: "El número debe comenzar con 9" })
        .regex(/^\d+$/, { message: "El número debe contener solo dígitos" }),
    informacionEmpresa: z.string().min(6, { message: "minimo 6 caracteres" }),
    mensaje: z.string().min(6, { message: "minimo 6 caracteres" }),
});

export type PublicitateForm = z.infer<typeof PublicitateSchema>;
