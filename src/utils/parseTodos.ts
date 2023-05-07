import { TodoItem } from "models";

export interface ParsedTodosData {
  activeTodos: TodoItem[];
  completedTodos: TodoItem[];
}

export const parseTodos = (todos: TodoItem[]): ParsedTodosData => {
  const activeTodos: TodoItem[] = [];
  const completedTodos: TodoItem[] = [];

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todo.isCompleted ? completedTodos.push(todo) : activeTodos.push(todo);
  }

  return {
    activeTodos,
    completedTodos,
  };
};
