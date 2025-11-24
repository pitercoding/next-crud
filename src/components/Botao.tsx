interface BotaoProps {
  cor?: "green" | "blue" | "gray"
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const cores: Record<Required<BotaoProps>["cor"], string> = {
  green: "from-green-400 to-green-700",
  blue: "from-blue-400 to-blue-700",
  gray: "from-gray-400 to-gray-700",
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "gray"

  return (
    <button onClick={props.onClick}
      className={`
        bg-linear-to-r
        ${cores[cor]}
        text-white px-4 py-2 rounded-md
        ${props.className ?? ""}
      `}
    >
      {props.children}
    </button>
  )
}