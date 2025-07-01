# Use Bun to build
FROM oven/bun AS builder
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

# Use NGINX to serve
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]