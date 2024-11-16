import { ITodo } from "types/types";
import { useTodosActions } from "./../../hooks/useTodosActions";
import { Checkbox, Item, Title } from "./TodoItemStyles";
import { memo } from "react";

const TodoItem = memo(({id, complete, title}: ITodo) => {
  console.log(`render ${title} TodoItem`)

  const { toggleTodo } = useTodosActions();
  return (
    <Item $completed={ complete }>
      <Checkbox 
        type="checkbox" 
        checked={ complete } 
        onChange={() => toggleTodo(id)}
      />
      <Title>{ title }</Title>
    </Item>
  )
})

export default TodoItem;