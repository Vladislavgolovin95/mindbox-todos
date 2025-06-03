import { ERROR_TODO_CONTEXT } from "constants/constants";
import { TodosContext } from "context/TodosContext";
import { useContext } from "react";

export const useTodos = () => {
  const todosContext = useContext(TodosContext);

  if (!todosContext) {
    throw new Error(ERROR_TODO_CONTEXT);
  }

  return todosContext;
}