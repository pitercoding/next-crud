# 📝 Next.js CRUD com Firebase

Este é um projeto de **Cadastro de Clientes** desenvolvido com **Next.js**, **Tailwind CSS** e **Firebase Firestore**.  

O sistema permite **cadastrar, editar, excluir e listar clientes**, com persistência dos dados no **Firestore**.

Foi totalmente modernizado, utilizando **hooks personalizados**, **componentes reutilizáveis** e **layout responsivo**, garantindo boa experiência em desktop e mobile.

[Acesse Aqui](next-crud-firebasedb.vercel.app)

---

## 🎯 Motivação do Projeto

O projeto foi criado como estudo prático para:

- Aprender integração do **Next.js** com **Firebase v9**.
- Implementar **CRUD completo** (Create, Read, Update, Delete) com Firestore.
- Utilizar **React Hooks** personalizados para lógica de estado e visibilidade.
- Criar uma interface **responsiva** e limpa com **Tailwind CSS**.
- Organizar um projeto Next.js com boa arquitetura de pastas.

## 🖥️ Funcionalidades Implementadas

- **Cadastro de Clientes**
  - Adicionar clientes com nome e idade.
  - Editar clientes existentes.
  - Excluir clientes.
  <br>
  <img src="https://github.com/user-attachments/assets/6d38ce8d-6992-417a-8c73-961f363ef4f1" width="600" />
  <img src="https://github.com/user-attachments/assets/83e227d3-4f1d-47f7-b515-aa7aa06936a2" width="600" />
  <img src="https://github.com/user-attachments/assets/e75edaf6-fe2d-495f-a5bc-109c69e3bbbe" width="600" />

- **Lista de Clientes**
  - Exibição de clientes em tabela.
  - Barra de rolagem automática quando há muitos dados ou telas pequenas.
  <br>  
  <img src="https://github.com/user-attachments/assets/a280f87c-484e-4d41-8edc-78d38197e7e4" width="400" />

- **Layout Responsivo**
  - Layout adaptado para diferentes tamanhos de tela.
  - Botões, formulários e tabelas estilizados com Tailwind CSS.
- **Persistência com Firebase**
  - Armazena todos os dados no **Firestore**.
  - Configuração segura de variáveis de ambiente (não versionadas) em `.env.local`.
  <br>
  <img src="https://github.com/user-attachments/assets/4bb27109-c9d3-458f-b41c-81bcff870e9a" width="600" />

- **Componentes Reutilizáveis**
  - `Botao.tsx`, `Entrada.tsx`, `Formulario.tsx`, `Tabela.tsx`, `Layout.tsx`, `Titulo.tsx`, `Icones.tsx`.
  <br>
  <img src="https://github.com/user-attachments/assets/fcf7099a-fa99-4e3d-87b5-846e44875f4e" width="300" />

- **Hooks Personalizados**
  - `useClientes.ts` → lógica de CRUD e estado de clientes.
  - `useTabelaOuForm.ts` → controle de visibilidade entre tabela e formulário.
  <br>
```ts
 export default function useClientes() {
   const repo = new ColecaoCliente();
   const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

   const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
   const [clientes, setClientes] = useState<Cliente[]>([]);

   useEffect(obterTodos, []);

   function obterTodos() {
     repo.obterTodos().then(clientes => {
       setClientes(clientes);
       exibirTabela();
     });
   }

   function salvarCliente(cliente: Cliente) {
     repo.salvar(cliente).then(obterTodos);
   }

   function excluirCliente(cliente: Cliente) {
     repo.excluir(cliente).then(obterTodos);
   }

   function selecionarCliente(cliente: Cliente) {
     setCliente(cliente);
     exibirFormulario();
   }

   return {
     cliente,
     clientes,
     tabelaVisivel,
     novoCliente: () => { setCliente(Cliente.vazio()); exibirFormulario(); },
     salvarCliente,
     excluirCliente,
     selecionarCliente,
     exibirTabela,
   };
 }
 ```

## 📦 Estrutura do Projeto

```bash
next-crud/
├── public/
│   └── (favicon)
│
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais e Tailwind
│   │   ├── layout.tsx           # Layout global
│   │   └── page.tsx             # Página principal
│   │
│   ├── backend-firebase/
│   │   ├── config.ts            # Configuração do Firebase
│   │   └── db/
│   │       └── ColecaoCliente.ts
│   │
│   ├── components/
│   │   ├── Botao.tsx
│   │   ├── Entrada.tsx
│   │   ├── Formulario.tsx
│   │   ├── Icones.tsx
│   │   ├── Layout.tsx
│   │   ├── Tabela.tsx
│   │   └── Titulo.tsx
│   │
│   ├── core/
│   │   ├── Cliente.ts
│   │   └── ClienteRepositorio.ts
│   │
│   └── hooks/
│       ├── useClientes.ts
│       └── useTabelaOuForm.ts
│
├── .env.local                   # Variáveis de ambiente (API Key, Auth Domain, Project ID)
├── package.json
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## ⚡ Tecnologias Utilizadas

- **Next.js 16** – Framework React moderno.
- **React 19** – Biblioteca de componentes.
- **Firebase v12** – Firestore para persistência de dados.
- **Tailwind CSS 4** – Estilização responsiva e moderna.
- **TypeScript 5** – Tipagem estática.
- **PostCSS** – Pré-processamento de CSS.

## 🔧 Como Rodar o Projeto
```bash
# Clone o repositório
git clone https://github.com/pitercoding/next-crud.git

# Entre na pasta do projeto
cd next-crud

# Instale as dependências
npm install

# Crie o arquivo .env.local com suas credenciais do Firebase
# Exemplo:
# NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Inicie o servidor de desenvolvimento
npm run dev

# Abra no navegador
http://localhost:3000

```
## 💡 Melhorias Futuras

- Implementar **autenticação de usuários** com Firebase Auth.
- Adicionar **busca e filtros** avançados na tabela de clientes.
- Criar **dashboard com estatísticas** de clientes.
- Implementar **testes unitários e de integração**.
- Melhorar **acessibilidade** e **performance** em mobile.

## 🤝 Contribuições

Contribuições são bem-vindas!
- Faça um fork do projeto.
- Crie uma branch para sua feature (`git checkout -b minha-feature`).
- Commit suas alterações (`git commit -am 'Adicionando nova feature'`).
- Envie para a branch principal (`git push origin minha-feature`).
- Abra um Pull Request.

## 👨‍💻 Autor
Desenvolvido por [**pitercoding**](https://github.com/pitercoding)

## 📄 Licença
Este projeto está licenciado sob a **MIT License**.




