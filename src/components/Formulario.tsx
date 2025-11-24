import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;

  const [nome, setNome] = useState<string>(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState<number>(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} className="mb-5" />
      ) : null}

      <Entrada<string>
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-5"
      />

      <Entrada<number>
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />

      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2" 
          onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>

        <Botao cor="gray" onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
