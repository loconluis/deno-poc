import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const port = 8085;
const app = serve({ port });

console.log(`Server is running: https://localhost:${port}`);

for await (const req of app) {
  req.respond({ body: "Hello World!" });
}
