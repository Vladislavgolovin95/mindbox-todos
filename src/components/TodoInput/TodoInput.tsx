import { useState } from 'react';
import { Button, Input, InputContainer } from './TodoInputStiles';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') handleAddTodo(value);
  }

  const handleAddTodo = (value: string) => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        onKeyDown={handleKeyDown} 
        placeholder="Write what needs to be done"
      />
      <Button onClick={() => handleAddTodo(value)}>Add</Button>
    </InputContainer>
  );
};

export default TodoInput;