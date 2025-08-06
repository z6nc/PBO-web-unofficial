import { z } from "zod";


export const ContactoSchema = z.object({
    nombreUsuario: z.string().min(8, { message: "Mínimo 6 caracteres" }),
    correoElectronico: z.string().email({ message: "Correo electrónico no válido" }),
    mensaje: z.string().min(6, { message: "minimo 6 caracteres" }),
});

export type ContactoForm = z.infer<typeof ContactoSchema>;
