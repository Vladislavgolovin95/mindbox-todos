import { LOCAL_STORAGE_TODOS_KEY } from "constants/constants";
import { nanoid } from "nanoid";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { ITodo, ITodosActionsContext, ITodosContext } from "types/types";

export const TodosContext = createContext<ITodosContext | null>(null);
export const TodosActionsContext = createContext<ITodosActionsContext | null>(null);

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

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
    () => ({ addTodo, toggleTodo, clearCompleted }),
    [addTodo, toggleTodo, clearCompleted]
  )

  return (
    <TodosContext.Provider value={value}>
      <TodosActionsContext.Provider value={actions}>
        {children}
      </TodosActionsContext.Provider>
    </TodosContext.Provider>
  )
}