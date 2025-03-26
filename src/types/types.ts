export interface ITodo {
  id: string;
  title: string;
  complete: boolean;
}

export interface ITodosContext {
  todos: ITodo[];
}

export interface ITodosActionsContext {
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

type ButtonVariant = 'primary' | 'filter';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $active?: boolean;
}