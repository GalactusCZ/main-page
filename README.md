# My Personal Website

This repository houses the source code for my personal website [michael-hruby.eu](https://michael-hruby.eu).

The website is powered by **[Astro](https://astro.build/)** and it is based on the **[Modern Developer Portfolio Template](https://astro.build/themes/details/modern-developer-portfolio-template/)** by **[Rishikesh S](https://astro.build/themes/author/2185)**.

## How to develop

1. Clone this repository.
2. If not done already, install Bun with `curl -fsSL https://bun.sh/install | bash` and reload terminal.
3. Install project dependencies with `bun install` (you can also use `npm` or `yarn`, but `bun` is my preference).
4. Start development server with `bun run dev`.

## How to deploy

1. Clone this repository.
2. Setup `docker buildx` to build project for different platforms with `docker buildx create --use` and `docker buildx inspect --bootstrap`.
3. Run `docker buildx build --platform linux/amd64,linux/arm64 -t galactuscz/main-page:latest --push .` in the project folder.
4. Deploy anywhere with docker from the Dockerhub repository `galactuscz/main-page`.
5. Then run with `docker run -d -p xxxx:80 galactuscz/main-page`

## Acknowledgments

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Modern Developer Portfolio Template](https://astro.build/themes/details/modern-developer-portfolio-template/)
- [Rishikesh S](https://astro.build/themes/author/2185)
