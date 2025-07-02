# My Personal Website

This repository houses the source code for my personal website [me.michael-hruby.eu](https://me.michael-hruby.eu).

The website is powered by **[Vue](https://vuejs.org/)** + **[Vite](https://vite.dev/)** and **[Bun](https://bun.sh/)**.

## How to develop

1. Clone this repository.
2. If not done already, install Bun with `curl -fsSL https://bun.sh/install | bash` and reload terminal.
3. Install project dependencies with `bun install`.
4. Start development server with `bun run dev`.

## How to deploy

1. Clone this repository.
2. Setup `docker buildx` to build project for different platforms with `docker buildx create --use` and `docker buildx inspect --bootstrap`.
3. Run `docker buildx build --platform linux/amd64,linux/arm64 -t galactuscz/main-page:latest --push .` in the project folder.
4. Deploy anywhere with docker from the Dockerhub repository `galactuscz/main-page`.
