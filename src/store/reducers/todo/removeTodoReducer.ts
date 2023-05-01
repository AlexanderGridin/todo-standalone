import { RemoveTodoAction } from "store/actions/todo";
import { AppState } from "store/models";

export const removeTodoReducer = (state: AppState, action: RemoveTodoAction) => {
  if (!state.openedProject) {
    return {
      ...state,
    };
  }

  const todoToRemove = action.payload.todo;

  if (todoToRemove.isInProgress) {
    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: null,
      },
    };
  }

  return {
    ...state,
    openedProject: {
      ...state.openedProject,
      activeTodos: todoToRemove.isCompleted
        ? [...state.openedProject.activeTodos]
        : state.openedProject.activeTodos.filter((todo) => todo.id !== todoToRemove.id),
      completedTodos: todoToRemove.isCompleted
        ? state.openedProject.completedTodos.filter((todo) => todo.id !== todoToRemove.id)
        : [...state.openedProject.completedTodos],
    },
  };
};
