import { useTodosActions } from 'hooks/useTodosActions';
import { FormEvent } from 'react';
import { SButton, SForm, SInput } from './FormStiles';


const TodoInput = () => {
  const PLACEHOLDER_MESSAGE = "Write what needs to be done";

  const { addTodo } = useTodosActions();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const title = (e.target as HTMLFormElement).text.value as string;
    if (title.trim()) {
      addTodo(title);
    }

    ((e.target as HTMLFormElement).reset())
  };

  console.log('render Form')

  return (
    <SForm onSubmit={ handleSubmit }>
      <label htmlFor="text"></label>
      <SInput
        type="text"
        id="text"
        name="title"
        placeholder={ PLACEHOLDER_MESSAGE }
      />
      <SButton type="submit">Add</SButton>
    </SForm>
  );
};

export default TodoInput;
// import { FormEvent, useState } from 'react';
// import { SButton, SForm, SInput } from './FormStiles';

// interface TodoInputProps {
//   addTodo: (text: string) => void;
// }

// const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
//   const [title, setTitle] = useState('');
//   const PLACEHOLDER_MESSAGE = "Write what needs to be done";

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (title.trim()) {
//       addTodo(title);
//       setTitle('');
//     }
//   };

//   console.log('render Form')

//   return (
//     <SForm onSubmit={ handleSubmit }>
//       <SInput
//         type="text"
//         value={ title }
//         onChange={(e) => setTitle(e.target.value)} 
//         placeholder={ PLACEHOLDER_MESSAGE }
//       />
//       <SButton type="submit">Add</SButton>
//     </SForm>
//   );
// };

// export default TodoInput;