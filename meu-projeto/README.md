# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📊 Plataforma Web de Gestão de Projetos e Times

Este é um **sistema de gerenciamento de projetos e tarefas** desenvolvido com **Vite + React + Bootstrap**.  
Permite criar, visualizar e excluir **projetos e tarefas**, salvando os dados no **LocalStorage**.

---

## 🚀 **Tecnologias Utilizadas**
- [Vite](https://vitejs.dev/) ⚡ (Ambiente de desenvolvimento super rápido)
- [React](https://react.dev/) ⚛️ (Biblioteca para criação de interfaces)
- [Bootstrap](https://getbootstrap.com/) 🎨 (Estilização responsiva)
- [React-Bootstrap](https://react-bootstrap.github.io/) (Componentes do Bootstrap para React)
- [React Icons](https://react-icons.github.io/react-icons/) (Ícones para botões e ações)
- **LocalStorage** (Armazena dados localmente no navegador)

---

## 📌 **Pré-requisitos**
Antes de rodar o projeto, você precisa ter instalado:
- **Node.js** (versão recomendada: `>= 16`)
- **NPM** ou **Yarn** (gerenciador de pacotes)

📌 **Verifique a instalação rodando os comandos:**
```sh
node -v
npm -v

* meu github deste projeto: https://github.com/JoaoHenrique32/cloudn1 *
cd meu-projeto

* instalar as dependencias
    npm install

* rodar o projeto
    npm run dev

Gerenciamento de Projetos 📂

Acesse a aba "Projetos".

Crie novos projetos inserindo um nome e clicando em "Criar Projeto".

Exclua um projeto clicando no ícone de lixeira 🗑.

Gerenciamento de Tarefas ✅

Acesse a aba "Tarefas".

Adicione tarefas preenchendo o campo e clicando em "Criar Tarefa".

Marque uma tarefa como concluída clicando no botão "Concluir".

Exclua uma tarefa clicando no ícone de lixeira 🗑.

Os dados ficam salvos no LocalStorage, então ao recarregar a página, eles permanecem.


* Na parte do Vercel *
    npm install -g vercel

* fazer login no Vercel
    vercel login

* para dar deploy 
    vercel --prod
