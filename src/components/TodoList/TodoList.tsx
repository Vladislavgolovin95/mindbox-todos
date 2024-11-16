import TodoItem from "components/TodoItem/TodoItem";
import { useTodos } from "hooks/useTodos";
import { useTodosActions } from "hooks/useTodosActions";
import { useState } from "react";
import { Filter } from "types/types";
import { Button, FilterButtons, Footer, List, TodoListWrapper } from "./TodoListStyles";

 const TodoList = () => {
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const TEXT_COUNT_ACTIVES_TODOS = 'items left';

  const { todos } = useTodos();
  const { clearCompleted } = useTodosActions();
  const filters = [
    { label: 'All', value: Filter.All },
    { label: 'Active', value: Filter.Active },
    { label: 'Completed', value: Filter.Completed },
  ];

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case Filter.Active:
        return !todo.complete;
      case Filter.Completed:
        return todo.complete;
      case Filter.All:
      default:
        return true;
    }
  });

  const remainingCount = todos.filter(todo => !todo.complete).length;

  const renderTodos = () => {
    return filteredTodos.map(todo => <TodoItem key={todo.id} {...todo} />)
  }

  const renderFilterButtons = () => {
    return filters.map(({ label, value }) => (
      <Button
        key={value}
        $active={filter === value}
        onClick={() => setFilter(value)}
      >
        {label}
      </Button>
    ))
  };

  console.log('render TodoList')

  return (
    <TodoListWrapper>
      <List>{ renderTodos() }</List>
      <Footer>
        <p>{ remainingCount } { TEXT_COUNT_ACTIVES_TODOS} </p>
        <FilterButtons>{ renderFilterButtons() }</FilterButtons>
        <Button onClick={ clearCompleted }>Clear completed</Button>
      </Footer>
    </TodoListWrapper>
  )
}

export default TodoList;
