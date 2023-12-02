<h1 align="center">
  <br>
  <a href="http://www.johanvilela.dev.br/"><img src="public/static/images/logo.png" alt="Markdownify" width="60"></a>
  <br>
  Johan Vilela Dev
  <br>
</h1>

<h4 align="center">Um blog sobre desenvolvimento construído com <a href="https://nextjs.org" target="_blank">Next.js</a>.</h4>

<p align="center">
  <a href="#recursos">Recursos</a> •
  <a href="#exemplos-de-posts">Exemplos de posts</a> •
  <a href="#guia-rápido">Guia Rápido</a> •
  <a href="#instalação">Instalação</a>

</p>

![screenshot](public/static/images/home.png)

## Recursos

- [Next.js](https://nextjs.org/) com [Typescript](https://www.typescriptlang.org/)
- [Contentlayer](https://www.contentlayer.dev/) para gerenciar o conteúdo
- Customização com [Tailwind](https://tailwindcss.com)
- [MDX](https://mdxjs.com/) - escreva JSX em arquivos markdown!
- Responsivo para mobile
- Tema claro e escuro
- Otimização de fontes com [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Otimização automática de imagens com [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Suporte a tags - cada tag exclusiva terá sua própria página
- 3 layouts de blog
- 2 layouts de listagem de conteúdo

## Exemplos de posts

- [Hello world](https://johanvilela.dev.br/blog/hello-world)
- [Afinal, o que é o npm?](https://johanvilela.dev.br/blog/afinal-o-que-e-npm)
- [Não existe passo a passo!](https://johanvilela.dev.br/blog/nao-existe-passo-a-passo)
- [Escrevendo...](https://johanvilela.dev.br/blog/escrevendo)

## Guia Rápido

1. Faça um clone do repositório

```bash
npx degit 'johanvilela/blog' blog
```

2. Edite `siteMetadata.js`
3. Edite `authors/default.md`
4. Edite `projectsData.js`
5. Edite `headerNavLinks.js` para personalizar os links de navegação
6. Adicione posts
7. Faça o Deploy na Vercel

## Instalação

```bash
yarn
```

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Licence

[MIT](https://github.com/johanvilela/blog/blob/main/LICENSE) © [Johan Vilela](https://www.johanvilela.dev.br)
