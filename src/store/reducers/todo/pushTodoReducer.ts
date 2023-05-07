import { PushTodoAction } from "store/actions/todo";
import { AppState } from "store/models";

export const pushTodoReducer = (state: AppState, action: PushTodoAction) => {
  if (!state.openedProject) {
    return {
      ...state,
    };
  }

  const todo = { ...action.payload.todo };
  const activeTodos = [...(state.openedProject?.activeTodos ?? [])];

  return {
    ...state,
    openedProject: {
      ...state.openedProject,
      activeTodos: [...activeTodos, todo],
    },
  };
};
