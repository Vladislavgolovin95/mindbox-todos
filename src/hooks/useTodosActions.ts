import { TodosActionsContext } from "context/TodosContext";
import { useContext } from "react";

export const useTodosActions = () => {
  const todosContext = useContext(TodosActionsContext);

  if (!todosContext) throw new Error('useTodosActions must be used within a TodosActionsProvider');

  return todosContext;
}