import Header from "components/Header/Header";
import TodoInput from "components/TodoInput/TodoInput";
import TodoList from "components/TodoList/TodoList";
import { nanoid } from "nanoid";
import { useState } from "react";
import { ITodo } from "types/types";
import { Container } from "./AppStyles";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (value: string) => {
    setTodos([...todos, {
      id: nanoid(),
      title: value,
      complete: false,
    }])
  }

  const toggleTodo = (id: string): void => {
    setTodos(todos.map(todo =>
      todo.id !== id ? todo : {...todo, complete: !todo.complete}
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.complete));
  };

  return (
    <Container>
      <Header />
      <TodoInput addTodo={ addTodo } />
      <TodoList 
        todos={ todos } 
        toggleTodo={ toggleTodo }
        clearCompleted={ clearCompleted }
      />
    </Container>
  )
}

export default App
