# Guia de Integração do Comunica

Este guia explica como integrar o player **Comunica** em qualquer projeto utilizando os arquivos minificados fornecidos:

* `API_TOKEN.js` → contém o token da API
* `costuming_site.min.js` → script principal de integração
* `costuming_site.min.css` → CSS para estilizar o botão flutuante e o iframe

---

## Projeto Web Básico (HTML/CSS/JS)

### Estrutura de Arquivos

```
seu-projeto/
├── index.html
├── API_TOKEN.js
├── costuming_site.min.js
├── costuming_site.min.css
```

### Exemplo de `index.html`

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <title>Integração Comunica</title>
  <link rel="stylesheet" href="costuming_site.min.css">
  <script src="API_TOKEN.js"></script>
  <script src="costuming_site.min.js" defer></script>
</head>
<body>
  <p>Clique em uma palavra para traduzi-la para LGA!</p>
  <p><span>Olá</span>, <span>mundo</span>!</p>
</body>
</html>
```

---

## React (CRA ou Vite)

### Opção A: `public/index.html`

Coloque os dois arquivos na pasta `public/` do projeto:

```html
<!-- public/index.html -->
<head>
  <link rel="stylesheet" href="/costuming_site.min.css">
  <script src="/API_TOKEN.js"></script>
  <script src="/costuming_site.min.js" defer></script>
</head>
```

### Opção B: Dinamicamente em um Componente

```js
useEffect(() => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/costuming_site.min.css';
  document.head.appendChild(css);

  const tokenScript = document.createElement('script');
  tokenScript.src = '/API_TOKEN.js';
  document.body.appendChild(tokenScript);

  const integrationScript = document.createElement('script');
  integrationScript.src = '/costuming_site.min.js';
  document.body.appendChild(integrationScript);
}, []);
```

---

## Next.js (App Router)

### Estrutura de Arquivos

Coloque os arquivos na pasta `public/`:

```
public/
├── API_TOKEN.js
├── costuming_site.min.js
└── costuming_site.min.css
```

### Arquivo `app/layout.js`

```jsx
export const metadata = {
  title: 'Comunica Integration',
  description: 'LGA Translation Player',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="stylesheet" href="/costuming_site.min.css" />
        <script src="/API_TOKEN.js" />
        <script src="/costuming_site.min.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Isso fará com que o player do Comunica seja incluído automaticamente em todas as páginas do projeto, com o botão flutuante, o iframe e o uso do token.

---

## Vue.js

### Estrutura para Vue com POI ou projetos base

```
static/
├── API_TOKEN.js
├── costuming_site.min.js
└── costuming_site.min.css
index.ejs
```

### Exemplo de `index.ejs`

```ejs
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8" />
    <title>Comunica + Vue</title>

    <!-- Comunica Integration -->
    <link rel="stylesheet" href="/static/costuming_site.min.css">
    <script src="/static/API_TOKEN.js"></script>
    <script src="/static/costuming_site.min.js" defer></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

Se o projeto usar `public/` (como com Vue CLI), o processo é o mesmo que para HTML:

```html
<!-- public/index.html -->
<link rel="stylesheet" href="/costuming_site.min.css">
<script src="/API_TOKEN.js"></script>
<script src="/costuming_site.min.js" defer></script>
```

---

## Angular

### Opção A: `angular.json`

```json
"styles": [
  "src/assets/costuming_site.min.css"
],
"scripts": [
  "src/assets/API_TOKEN.js",
  "src/assets/costuming_site.min.js"
]
```

### Opção B: Diretamente no `index.html`

```html
<link rel="stylesheet" href="assets/costuming_site.min.css">
<script src="assets/API_TOKEN.js"></script>
<script src="assets/costuming_site.min.js" defer></script>
```
---

## Resumo

| Tipo de Projeto | Como Incluir o Player Comunica                      |
| --------------- | --------------------------------------------------- |
| HTML/CSS/JS     | Adicione `<script>` e `<link>` no `<head>`          |
| React           | Use `public/index.html` ou carregue com `useEffect` |
| Next.js         | Adicione em `app/layout.js`                         |
| Vue.js          | Use `index.ejs` (POI) ou `public/index.html` (CLI)  |
| Angular         | Use `angular.json` ou insira no `index.html`        |

