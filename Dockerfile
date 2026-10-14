# Use Bun for the locked dependency graph, then Node 22 for Astro itself.
# Astro 7.3+ validates the actual Node runtime and Bun advertises Node 20
# compatibility, so `bun run build` is not sufficient here.
FROM node:22-bookworm-slim AS builder
WORKDIR /app

RUN npm install --global bun@1.4.3

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN node node_modules/astro/bin/astro.mjs build

# Use NGINX to serve
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]