"use client";

import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Formulario from "@/components/Formulario";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <div
      className={`
      flex min-h-screen justify-center items-center 
      bg-linear-to-r from-blue-600 to-purple-500 text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <div className="max-h-[70vh] overflow-y-auto overflow-x-auto">
              <Tabela
                clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
            </div>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
