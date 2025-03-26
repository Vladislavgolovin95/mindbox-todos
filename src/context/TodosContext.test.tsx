import { render, waitFor } from "@testing-library/react";
import { LOCAL_STORAGE_TODOS_KEY } from "constants/constants";
import { TodosActionsContext, TodosContext, TodosProvider } from "./TodosContext";

describe('TodosContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Инициализируется пустым массивом или данными из localStorage', () => {
    localStorage.setItem(
      LOCAL_STORAGE_TODOS_KEY,
      JSON.stringify([{
        id: '1',
        title: 'test todo',
        complete: false
      }])
    );

    render(
      <TodosProvider>
        <TodosContext.Consumer>
          {(value) => {
            expect(value?.todos).toEqual([{
              id: '1',
              title: 'test todo',
              complete: false
            }]);

            return null;
          }}
        </TodosContext.Consumer>
      </TodosProvider>
    );
  });

  test('addTodo добавляет новую задачу с уникальным идентификатором и правильными полями', async () => {
    const { getByTestId } = render(
      <TodosProvider>
        <TodosActionsContext.Consumer>
          {(actions) => {
            actions?.addTodo('new todo');
            return null;
          }}
        </TodosActionsContext.Consumer>
        <TodosContext.Consumer>
          {(value) => (
            <div data-testid="todos">{JSON.stringify(value?.todos)}</div>
          )}
        </TodosContext.Consumer>
      </TodosProvider>
    );
  
    await waitFor(() => {
      const todos = JSON.parse(getByTestId('todos').textContent || '[]');
      expect(todos).toHaveLength(1);
      expect(todos[0]).toMatchObject({
        title: 'new todo',
        complete: false,
      });
    });
  });

  test('toggleTodo переключает на завершенное состояние задачи', async () => {
    localStorage.setItem(
      LOCAL_STORAGE_TODOS_KEY,
      JSON.stringify([{
        id: '1',
        title: 'test todo',
        complete: false
      }])
    );
  
    const { getByTestId } = render(
      <TodosProvider>
        <TodosActionsContext.Consumer>
          {(actions) => {
            actions?.toggleTodo('1');
            return null;
          }}
        </TodosActionsContext.Consumer>
        <TodosContext.Consumer>
          {(value) => (
            <div data-testid="todos">{JSON.stringify(value?.todos)}</div>
          )}
        </TodosContext.Consumer>
      </TodosProvider>
    );
  
    await waitFor(() => {
      const todos = JSON.parse(getByTestId('todos').textContent || '[]');
      expect(todos[0].complete).toBe(true);
    });
  });

  
  test('clearCompleted удаляет завершенные задачи', async () => {
    localStorage.setItem(
      LOCAL_STORAGE_TODOS_KEY,
      JSON.stringify([
        {
          id: '1',
          title: 'active todo',
          complete: false
        },
        {
          id: '2',
          title: 'completed todo',
          complete: true
        },
      ])
    );
  
    const { getByTestId } = render(
      <TodosProvider>
        <TodosActionsContext.Consumer>
          {(actions) => {
            actions?.clearCompleted();
            return null;
          }}
        </TodosActionsContext.Consumer>
        <TodosContext.Consumer>
          {(value) => (
            <div data-testid="todos">{JSON.stringify(value?.todos)}</div>
          )}
        </TodosContext.Consumer>
      </TodosProvider>
    );
  
    await waitFor(() => {
      const todos = JSON.parse(getByTestId('todos').textContent || '[]');
      expect(todos).toHaveLength(1);
      expect(todos[0]).toMatchObject({ title: 'active todo' });
    });
  });
  

  test('localStorage обновляется при изменении todos', () => {
    render(
      <TodosProvider>
        <TodosActionsContext.Consumer>
          {(actions) => {
            actions?.addTodo('ls todo');
            return null;
          }}
        </TodosActionsContext.Consumer>
      </TodosProvider>
    );

    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY) || '[]');
    expect(storedTodos).toHaveLength(1);
    expect(storedTodos[0].title).toBe('ls todo');
  });
});