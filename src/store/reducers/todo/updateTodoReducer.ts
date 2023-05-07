import { UpdateTodoAction } from "store/actions/todo";
import { AppState } from "store/models";
import { parseTodos } from "utils";

export const updateTodoReducer = (state: AppState, action: UpdateTodoAction) => {
  if (!state.openedProject) {
    return {
      ...state,
    };
  }

  const todoToUpdate = { ...action.payload.todo };

  if (!todoToUpdate.isInProgress) {
    const todos = [...state.openedProject.activeTodos, ...state.openedProject.completedTodos];
    const updatedTodos = todos.map((todo) => (todo.id === todoToUpdate.id ? todoToUpdate : todo));

    const { activeTodos, completedTodos } = parseTodos(updatedTodos);

    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        activeTodos,
        completedTodos,
      },
    };
  }

  if (todoToUpdate.isCompleted) {
    return {
      ...state,
      openedProject: {
        ...state.openedProject,
        inProgressTodo: null,
        completedTodos: [{ ...todoToUpdate, isInProgress: false }, ...state.openedProject.completedTodos],
      },
    };
  }

  return {
    ...state,
    openedProject: {
      ...state.openedProject,
      inProgressTodo: todoToUpdate,
    },
  };
};
