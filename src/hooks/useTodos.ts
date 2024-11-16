import { TodosContext } from "context/TodosContext";
import { useContext } from "react";

export const useTodos = () => {
  const todosContext = useContext(TodosContext);

  if (!todosContext) throw new Error('useTodos must be used within a TodosProvider');

  return todosContext;
}