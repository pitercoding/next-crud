"use client";

import ColecaoCliente from "@/backend-firebase/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  // Inicializa o repositório apenas no cliente
  const [repo] = useState<ClienteRepositorio>(() => new ColecaoCliente());

  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    // Só roda após o cliente estar pronto
    if (typeof window !== "undefined") {
      obterTodos();
    }
  }, []);

  async function obterTodos() {
    const lista = await repo.obterTodos();
    setClientes(lista);
    exibirTabela();
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    await obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    await obterTodos();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  };
}