import Form from "components/Form/Form";
import Header from "components/Header/Header";
import TodoList from "components/TodoList/TodoList";
import { TodosProvider } from "./../context/TodosContext";
import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <TodosProvider>
    <Container>
      <Header />
      <Form />
      <TodoList />
    </Container>
    </TodosProvider>
  )
}

export default App
