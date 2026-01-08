import { z } from "zod";

export const signUpSchema = z
  .object({
    surname: z.string().min(1, "Veuillez remplir ce champ"),
    firstName: z.string().min(1, "Veuillez remplir ce champ"),
    phone: z.string().min(1, "Veuillez remplir ce champ"),
    email: z.string().email("Email invalide"),
    password: z.string().min(6, "Mot de passe trop court (min 6 caractères)"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mot de passe incorrect",
    path: ["confirmPassword"], 
  });

  export const signInSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe incorrect"),
});
