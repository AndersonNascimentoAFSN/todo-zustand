import { useCallback, useState } from "react";
import { Task } from "./@types/task";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from "./components/TodoList";

export function App() {
  const [todo, setTodo] = useState<Task[]>([])


  const handleAddTodo = useCallback((task: string) => {
    setTodo((prevState) => [...prevState, { id: uuidv4().slice(0, 5), description: task }])
  }, [])

  const handleDeleteTodo = useCallback((id: string) => {
    setTodo((prevState) => prevState.filter((item) => item.id !== id))
  }, [])

  return (
    <>
      <Header status={todo.length} />
      <Todo handleAddTodo={handleAddTodo} />

      <TodoList todo={todo} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}


