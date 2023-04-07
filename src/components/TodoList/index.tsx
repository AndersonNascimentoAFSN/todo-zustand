import { Task } from "../../@types/task";
import { useTodoStore } from "../../store/todo";
import { TodoItem } from "../TodoItem";

type TodoListProps = {
  // todo: Task[]
  handleDeleteTodo: (id: string) => void
}

export function TodoList({ /* todo, */ handleDeleteTodo }: TodoListProps) {
  const { todo } = useTodoStore(({ state }) => ({
    todo: state.todo
  }))

  return (
    <div className="w-screen flex items-center justify-center">
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item) => (
            <TodoItem item={item} /* handleDeleteTodo={handleDeleteTodo} */ key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}