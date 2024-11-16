import Form from "components/Form/Form";
import Header from "components/Header/Header";
import TodoList from "components/TodoList/TodoList";
import { Container } from "./AppStyles";
import { TodosProvider } from "./../context/TodosContext";

const App: React.FC = () => {

  console.log('render App')

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
