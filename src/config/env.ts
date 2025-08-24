import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("4000"),
  MONGODB_URI: z.string().url().or(z.string().startsWith("mongodb://"))
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = _env.data;
