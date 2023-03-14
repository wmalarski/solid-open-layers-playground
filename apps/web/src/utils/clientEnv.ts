import { z } from "zod";

const envSchema = z.object({
  VITE_SUPABASE_ANON_KEY: z.string(),
  VITE_SUPABASE_URL: z.string(),
});

export const clientEnv = envSchema.parse(import.meta.env);
