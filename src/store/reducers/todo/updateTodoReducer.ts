import { TodoItem } from "models";
import { UpdateTodoAction } from "store/actions/todo";
import { AppState } from "store/models";

export const updateTodoReducer = (state: AppState, action: UpdateTodoAction) => {
  if (!state.openedProject) {
    return {
      ...state,
    };
  }

  if (action.payload.todo.isInProgress) {
    if (action.payload.todo.isCompleted) {
      return {
        ...state,
        openedProject: {
          ...state.openedProject,
          inProgressTodo: null,
          completedTodos: [{ ...action.payload.todo, isInProgress: false }, ...state.openedProject.completedTodos],
        },
      };
    }

    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: {
          ...action.payload.todo,
        },
      },
    };
  }

  const todos = [...state.openedProject.activeTodos, ...state.openedProject.completedTodos];
  const updatedTodos = todos.map((todo) =>
    todo.id === action.payload.todo.id ? { ...action.payload.todo } : { ...todo }
  );

  const activeTodos: TodoItem[] = [];
  const completedTodos: TodoItem[] = [];

  updatedTodos.forEach((todo: TodoItem) => (todo.isCompleted ? completedTodos.push(todo) : activeTodos.push(todo)));

  return {
    ...state,
    openedProject: {
      ...state.openedProject,
      activeTodos,
      completedTodos,
    },
  };
};
