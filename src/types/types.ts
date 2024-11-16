export interface ITodo {
  id: string;
  title: string;
  complete: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}