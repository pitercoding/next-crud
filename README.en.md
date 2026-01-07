<h1 align="center">⚛️🔥 Next.js CRUD with Firebase (EN)</h1>

<p align="center">
  🌎 <strong>Languages:</strong><br>
  <a href="README.md">🇧🇷 Portuguese</a> |
  <a href="README.en.md">🇺🇸 English</a>
</p>

This is a **Customer Registration** project developed with **Next.js**, **Tailwind CSS**, and **Firebase Firestore**.

The system allows you to **create, edit, delete, and list customers**, with data persistence in **Firestore**.

It was fully modernized using **custom hooks**, **reusable components**, and a **responsive layout**, ensuring a good experience on both desktop and mobile devices.

[Access Here](next-crud-firebasedb.vercel.app)

---

## 🎯 Project Motivation

The project was created as a practical study to:

- Learn how to integrate **Next.js** with **Firebase v9**.
- Implement a **full CRUD** (Create, Read, Update, Delete) using Firestore.
- Use custom **React Hooks** for state and visibility logic.
- Create a **responsive** and clean interface with **Tailwind CSS**.
- Organize a Next.js project with a well-structured folder architecture.

## 🖥️ Implemented Features

- **Customer Registration**
  - Add customers with name and age.
  - Edit existing customers.
  - Delete customers.
  <br>
  <img src="https://github.com/user-attachments/assets/6d38ce8d-6992-417a-8c73-961f363ef4f1" width="600" />
  <img src="https://github.com/user-attachments/assets/83e227d3-4f1d-47f7-b515-aa7aa06936a2" width="600" />
  <img src="https://github.com/user-attachments/assets/e75edaf6-fe2d-495f-a5bc-109c69e3bbbe" width="600" />

- **Customer List**
  - Display customers in a table.
  - Automatic scrollbar when there is a large amount of data or on small screens.
  <br>  
  <img src="https://github.com/user-attachments/assets/a280f87c-484e-4d41-8edc-78d38197e7e4" width="400" />

- **Responsive Layout**
  - Layout adapted to different screen sizes.
  - Buttons, forms, and tables styled with Tailwind CSS.

- **Persistence with Firebase**
  - Stores all data in **Firestore**.
  - Secure configuration of environment variables (not versioned) in `.env.local`.
  <br>
  <img src="https://github.com/user-attachments/assets/4bb27109-c9d3-458f-b41c-81bcff870e9a" width="600" />

- **Reusable Components**
  - `Botao.tsx`, `Entrada.tsx`, `Formulario.tsx`, `Tabela.tsx`, `Layout.tsx`, `Titulo.tsx`, `Icones.tsx`.
  <br>
  <img src="https://github.com/user-attachments/assets/fcf7099a-fa99-4e3d-87b5-846e44875f4e" width="300" />

- **Custom Hooks**
  - `useClientes.ts` → CRUD logic and customer state.
  - `useTabelaOuForm.ts` → visibility control between table and form.
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

## Project Structure
```bash
next-crud/
├── public/
│   └── (favicon)
│
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind
│   │   ├── layout.tsx           # Global layout
│   │   └── page.tsx             # Main page
│   │
│   ├── backend-firebase/
│   │   ├── config.ts            # Firebase configuration
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
├── .env.local                   # Environment variables (API Key, Auth Domain, Project ID)
├── package.json
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## ⚡ Technologies Used
- **Next.js 16** – Modern React framework.
- **React 19** – Component library.
- **Firebase v12** – Firestore for data persistence.
- **Tailwind CSS 4** – Modern and responsive styling.
- **TypeScript 5** – Static typing.
- **PostCSS** – CSS preprocessing.

## 🔧 How to Run the Project
```bash
# Clone the repository
git clone https://github.com/pitercoding/next-crud.git

# Enter the project folder
cd next-crud

# Install dependencies
npm install

# Create the .env.local file with your Firebase credentials
# Example:
# NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Start the development server
npm run dev

# Open in the browser
http://localhost:3000
```

## 💡 Future Improvements

- Implement **user authentication** with Firebase Auth.
- Add advanced **search and filters** to the customer table.
- Create a **dashboard with customer statistics**.
- Implement **unit and integration tests**.
- Improve **accessibility** and **mobile performance**.

## 🤝 Contributing

Contributions are welcome!

- Fork the project.
- Create a branch for your feature (`git checkout -b my-feature`).
- Commit your changes (`git commit -am 'Add new feature'`).
- Push to the branch (`git push origin my-feature`).
- Open a Pull Request.

## 📜 License

This project is licensed under the **MIT License**.

## 🧑‍💻 Author

**Piter Gomes** — Computer Science Student (5th Semester) & Full-Stack Developer

📧 [Email](mailto:piterg.bio@gmail.com) | 💼 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | 💻 [GitHub](https://github.com/pitercoding) | 🌐 [Portfolio](https://portfolio-pitergomes.vercel.app/)