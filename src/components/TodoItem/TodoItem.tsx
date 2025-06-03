import { ITodo } from "types/types";
import { useTodosActions } from "./../../hooks/useTodosActions";
import { SCheckbox, SItem, STitle } from "./styles";
import { memo } from "react";

const TodoItem = memo(({ id, complete, title }: ITodo) => {
  const { toggleTodo } = useTodosActions();
  
  return (
    <SItem data-testid="todo-item" $completed={complete}>
      <SCheckbox 
        type="checkbox" 
        checked={complete} 
        onChange={() => toggleTodo(id)}
        data-testid="todo-checkbox"
      />
      <STitle data-testid="todo-title">{title}</STitle>
    </SItem>
  )
})

export default TodoItem;