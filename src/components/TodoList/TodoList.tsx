import Button from 'components/Button/Button';
import TodoItem from 'components/TodoItem/TodoItem';
import {
  CLEAR_COMPLETED_BUTTON_TEXT,
  TODOS_LEFT_TEXT,
} from 'constants/constants';
import { useTodos } from 'hooks/useTodos';
import { useTodosActions } from 'hooks/useTodosActions';
import { useState } from 'react';
import { Filter } from 'types/types';
import {
  SFooter,
  SList,
  STodoListWrapper,
  SWrapperButtonsFilters,
} from './styles';

const TodoList = () => {
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const { todos } = useTodos();
  const { clearCompleted } = useTodosActions();
  const filters = [
    { label: 'All', value: Filter.All },
    { label: 'Active', value: Filter.Active },
    { label: 'Completed', value: Filter.Completed },
  ];

  const filteredTodos = todos.filter((todo) => {
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

  const remainingCount = todos.filter((todo) => !todo.complete).length;

  const renderTodos = () => {
    return filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />);
  };

  const renderFilterButtons = () => {
    return filters.map(({ label, value }) => (
      <Button
        key={value}
        $variant="filter"
        $active={filter === value}
        onClick={() => setFilter(value)}
      >
        {label}
      </Button>
    ));
  };

  return (
    <STodoListWrapper>
      <SList>{renderTodos()}</SList>
      <SFooter>
        <p>
          {remainingCount} {TODOS_LEFT_TEXT}
        </p>
        <SWrapperButtonsFilters>
          {renderFilterButtons()}
        </SWrapperButtonsFilters>
        <Button 
          $variant="filter" 
          onClick={clearCompleted}
          data-testId="clear-completed"
        >
          {CLEAR_COMPLETED_BUTTON_TEXT}
        </Button>
      </SFooter>
    </STodoListWrapper>
  );
};

export default TodoList;
