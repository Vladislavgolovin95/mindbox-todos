import { ITodo } from "types/types";
import { useTodosActions } from "./../../hooks/useTodosActions";
import { SCheckbox, SItem, STitle } from "./styles";
import { memo } from "react";

const TodoItem = memo(({ id, complete, title }: ITodo) => {
  const { toggleTodo } = useTodosActions();
  
  return (
    <SItem $completed={complete}>
      <SCheckbox 
        type="checkbox" 
        checked={complete} 
        onChange={() => toggleTodo(id)}
        data-testId="todo-checkbox"
      />
      <STitle data-testId="todo-item">{title}</STitle>
    </SItem>
  )
})

export default TodoItem;