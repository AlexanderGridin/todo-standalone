import { SetInProgressTodoAction } from "store/actions/todo";
import { AppState } from "store/models";

export const setInProgressTodoReducer = (state: AppState, action: SetInProgressTodoAction) => {
  if (!state.openedProject) {
    return {
      ...state,
    };
  }

  const todo = action.payload.todo;
  const inProgressTodo = state.openedProject.inProgressTodo;

  if (!todo && inProgressTodo) {
    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: null,
        activeTodos: [{ ...inProgressTodo, isInProgress: false }, ...state.openedProject.activeTodos],
      },
    };
  }

  if (todo && inProgressTodo && todo.id !== inProgressTodo.id) {
    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: { ...todo },
        activeTodos: [
          { ...inProgressTodo, isInProgress: false },
          ...state.openedProject.activeTodos.filter((t) => t.id !== todo.id),
        ],
      },
    };
  }

  if (todo && !inProgressTodo) {
    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: { ...todo },
        activeTodos: [...state.openedProject.activeTodos.filter((t) => t.id !== todo.id)],
      },
    };
  }

  return {
    ...state,
    openedProject: {
      ...state.openedProject,
      inProgressTodo: null,
    },
  };
};
