import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});

const parseEnv = envSchema.safeParse(import.meta.env);

if (!parseEnv.success) {
  console.error(
    "Invalid environment variables:",
    parseEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid environment variables");
}

export const environment = parseEnv.data;