import { config } from "dotenv";
import { resolve } from "path";

// Load .env file from the same directory as this config file
config({ path: resolve(__dirname, ".env") });

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});