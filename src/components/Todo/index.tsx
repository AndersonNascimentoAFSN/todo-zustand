import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../../@types/task";

type TodoProps = {
  handleAddTodo: (task: string) => void
}
export function Todo({ handleAddTodo }: TodoProps) {
  const [task, setTask] = useState<string>('')


  return (
    <div className="w-screen p-10 flex gap-4">
      <input
        type="text"
        placeholder="adicione uma tarefa a lista"
        className="w-full max-w-lg p-2 border-2 border-gray-300 placeholder:text-purple-500 outline-none ring-1 focus:ring focus:ring-purple-300 text-purple-800"
        onChange={(event) => setTask(event.target.value)} value={task}
      />

      <button
        className="p-2 bg-purple-700 rounded-lg text-white hover:opacity-75"
        onClick={() => {
          handleAddTodo(task)
          setTask('')
        }
        }>
        Adicionar
      </button>
    </div >
  )
}