import { ERROR_TODO_ACTIONS_CONTEXT } from "constants/constants";
import { TodosActionsContext } from "context/TodosContext";
import { useContext } from "react";

export const useTodosActions = () => {
  const todosContext = useContext(TodosActionsContext);

  if (!todosContext) throw new Error(ERROR_TODO_ACTIONS_CONTEXT);
  
  return todosContext;
}