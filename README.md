# Portfólio (React)

Site estático do portfólio de Ramon Barbosa, em React 19 + Vite 7 + TypeScript + Tailwind 4.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

A saída fica em `dist/`.

## Deploy

O workflow em `.github/workflows/deploy.yml` faz build da imagem Docker e publica no servidor na porta **4201** (host) → **4200** (container), mesmo fluxo do Angular anterior.

Push na branch `master` dispara o deploy, desde que os secrets `SERVER_HOST`, `SERVER_USER` e `SERVER_SSH_KEY` estejam configurados no repositório.

## Código Angular

A versão Angular 21 ficou em `legacy/angular-v21/` para referência.