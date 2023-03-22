import { z } from "zod";

export const MemberSchema = z.object({
    firstname: z.string().min(2),
    name: z.string().min(2),
    imagePath: z.string().optional()
})

export type Member = z.infer<typeof MemberSchema>