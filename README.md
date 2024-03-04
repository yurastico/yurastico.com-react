# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Requerimentos do trabalho 

Criando seu primeiro projeto em ReactJS.

- Utilize o Vite para criação do projeto.
- O projeto será um site pessoal, ou seja, deve conter informações suas e uma foto sua te apresentando.
- Faça um projeto de página única, não se preocupe com navegação.
- Utilize Styled-components no projeto.
- Programe pensando em UI/UX.
- Utilize o Github como repositório.
- Preocupe-se com a arquitetura e separação de responsabilidades no projeto.
- Adicione sua personalidade ao projeto :D

A entrega deve conter um txt com o link para seu projeto no Github.

CADA ALUNO DEVE ENTREGAR NO SEU PRÓPRIO GITHUB.