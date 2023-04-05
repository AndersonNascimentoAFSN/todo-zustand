import { useTodoStore } from "../../store/todo"

type HeaderProps = {
  status: number
}

export function Header({ status }: HeaderProps) {
  const { todo } = useTodoStore(state => ({
    todo: state.todo
  }))

  return (
    <header className="w-screen bg-fuchsia-800 p-10">
      <h1 className="m-auto text-white text-3xl">Lista de Tarefas</h1>
      <h3 className="m-auto text-white text-xl">Organize sua vida de forma simples e prática</h3>
      <span className="text-white mr-3">Quantidade de tasks:</span>
      <span className="text-white">{todo.length}</span>
    </header>
  )
}
