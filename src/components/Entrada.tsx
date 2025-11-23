interface EntradaProps<T extends string | number> {
  tipo?: "text" | "number";
  texto: string;
  valor: T;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: T) => void;
}

export default function Entrada<T extends string | number>(
  props: EntradaProps<T>
) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>

      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => {
          const v =
            props.tipo === "number" ? Number(e.target.value) : e.target.value;

          props.valorMudou?.(v as T);
        }}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
