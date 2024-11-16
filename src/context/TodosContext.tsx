import { nanoid } from "nanoid";
import { createContext, FC, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { ITodo } from "types/types";

interface ITodosContext {
  todos: ITodo[];
}

interface ITodosActionsContext {
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
}

export const TodosContext = createContext<ITodosContext | null>(null);
export const TodosActionsContext = createContext<ITodosActionsContext | null>(null);

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = useCallback((title: string) => {
    setTodos((todos) => [...todos, {
      id: nanoid(),
      title: title,
      complete: false,
    }])
  }, []);

  const toggleTodo = useCallback((id: string): void => {
    setTodos((todos) => todos.map(todo =>
      todo.id !== id ? todo : {...todo, complete: !todo.complete}
    ))
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((todos) => todos.filter(todo => !todo.complete));
  }, []);

  const value = useMemo(
    () => ({ todos }),
    [todos]
  );

  const actions = useMemo(
    () => ({addTodo, toggleTodo, clearCompleted}),
    [addTodo, toggleTodo, clearCompleted]
  )

  return (
    <TodosContext.Provider value={value}>
      <TodosActionsContext.Provider value={actions}>
        { children }
      </TodosActionsContext.Provider>
    </TodosContext.Provider>
  )
}