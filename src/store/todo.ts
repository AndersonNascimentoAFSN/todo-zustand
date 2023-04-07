import { create } from 'zustand'


// import produce, { setAutoFreeze } from 'immer'

import { Task } from "../@types/task";

import { v4 as uuidv4 } from 'uuid';

type TodoStore = {
  state: {
    todo: Task[]
  },

  getValues: {
    getTotalTodo: () => number
  },

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
    state: {
      todo: [],
    },

    getValues: {
      getTotalTodo: () => get().state.todo.length,
    },

    actions: {
      addTask: (task: string) => set(({ state }: TodoStore) =>
      ({
        state:
          { todo: [...state.todo, { description: task, id: uuidv4().slice(0, 5) }] }
      })),

      removeTask: (id: string) => set(({ state }: TodoStore) => ({
        state:
          { todo: state.todo.filter((item) => item.id !== id) }
      })),

      setInitialState() {
        set((state: TodoStore) => ({
          ...state,
          ...initialState
        }))
      }
    }
  }))

export const useTodoStore = createTodoStore()