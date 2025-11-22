import Layout from "@/components/Layout"

export default function Home() {
  return(
    <div className={`
    flex h-screen justify-center items-center bg-linear-to-r from-blue-600 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  ) 
}
