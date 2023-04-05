import { create } from 'zustand'


// import produce, { setAutoFreeze } from 'immer'

import { Task } from "../@types/task";

import { v4 as uuidv4 } from 'uuid';

type TodoStore = {
  todo: Task[]

  actions: {
    addTask: (task: string) => void
    removeTask: (id: string) => void
  }
}

interface InitialStateTodoStore {
  todo: Task[]
}

export const initialState: InitialStateTodoStore = {
  todo: [
    { id: '', description: '' }
  ],
}

const createTodoStore = () =>
  create<TodoStore>((set, get) => ({
    todo: [],

    actions: {
      addTask: (task: string) => set((state: TodoStore) =>
        ({ todo: [...state.todo, { description: task, id: uuidv4().slice(0, 5).slice(0, 4) }] })),

      removeTask: (id: string) => set((state: TodoStore) => ({ todo: state.todo.filter((item) => item.id !== id) })),

      // status: () => get().todo.length,

      setInitialState() {
        set((state: TodoStore) => ({
          ...state,
          ...initialState
        }))
      }
    }
  }))

export const useTodoStore = createTodoStore()