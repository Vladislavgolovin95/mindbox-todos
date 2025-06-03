import Button from 'components/Button/Button';
import { ADD_TODO_BUTTON_TEXT, TODO_PLACEHOLDER_TEXT } from 'constants/constants';
import { useTodosActions } from 'hooks/useTodosActions';
import { FormEvent } from 'react';
import { SForm, SInput } from './styles';


const TodoInput = () => {
  const { addTodo } = useTodosActions();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const title = (e.target as HTMLFormElement).text.value as string;
    
    if (title.trim()) {
      addTodo(title);
    }

    ((e.target as HTMLFormElement).reset())
  };

  return (
    <SForm onSubmit={ handleSubmit }>
      <label htmlFor="text"></label>
      <SInput
        type="text"
        id="text"
        name="title"
        placeholder={TODO_PLACEHOLDER_TEXT}
        data-testid="todo-input"
      />
      <Button 
        type="submit" 
        $variant="primary"
        data-testid="add-todo"
      >
        {ADD_TODO_BUTTON_TEXT}
      </Button>
    </SForm>
  );
};

export default TodoInput;