import { useState } from "react";
import { ITodo } from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";
import { Button, FilterButtons, Footer, List, TodoListWrapper } from "./TodoListStyles";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
}

type TFilterTodo = 'all' | 'active' | 'completed';

 const TodoList: React.FC<ITodoList> = (props) => {
  const { todos, toggleTodo, clearCompleted } = props;
  const [filter, setFilter] = useState<TFilterTodo>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.complete;
    if (filter === 'completed') return todo.complete;
    return true;
  });

  const remainingCount = todos.filter(todo => !todo.complete).length;

  return (
    <TodoListWrapper>
      <List>
        {filteredTodos.map(todo => (
          <TodoItem
            key={ todo.id }
            toggleTodo={ toggleTodo }
            { ...todo }
          />
        ))}
      </List>
      <Footer>
        <p>{remainingCount} items left</p>
        <FilterButtons>
          <Button $active={filter === 'all'} onClick={() => setFilter('all')}>All</Button>
          <Button $active={filter === 'active'} onClick={() => setFilter('active')}>Active</Button>
          <Button $active={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</Button>
        </FilterButtons>
        <Button onClick={ clearCompleted }>Clear completed</Button>
      </Footer>
    </TodoListWrapper>
  )
}

export default TodoList;
