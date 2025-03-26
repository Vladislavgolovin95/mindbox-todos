import { ITodo } from "types/types";
import { useTodosActions } from "./../../hooks/useTodosActions";
import { SCheckbox, SItem, STitle } from "./styles";
import { memo } from "react";

const TodoItem = memo(({ id, complete, title }: ITodo) => {
  const { toggleTodo } = useTodosActions();
  
  return (
    <SItem data-testId="todo-item" $completed={complete}>
      <SCheckbox 
        type="checkbox" 
        checked={complete} 
        onChange={() => toggleTodo(id)}
        data-testId="todo-checkbox"
      />
      <STitle data-testId="todo-title">{title}</STitle>
    </SItem>
  )
})

export default TodoItem;