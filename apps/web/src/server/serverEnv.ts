import { isServer } from "solid-js/web";
import { z } from "zod";

if (!isServer) {
  throw new Error("Server on client");
}

const envSchema = z.object({
  VITE_SUPABASE_ANON_KEY: z.string(),
  VITE_SUPABASE_URL: z.string(),
});

export const serverEnv = envSchema.parse(import.meta.env);
