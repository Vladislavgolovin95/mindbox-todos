import { ITodo } from "../../types/types";
import { Checkbox, Item, Title } from "./TodoItemStyles";

interface ITodoItem extends ITodo {
  toggleTodo: (id: string) => void;
}


const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo } = props;
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
}

export default TodoItem;