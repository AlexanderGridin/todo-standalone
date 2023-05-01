import { TodoItem } from "models";
import { ActionType } from "store/models";

export const setInProgressTodoAction = (todo: TodoItem | null) => {
  return {
    type: ActionType.SET_IN_PROGRESS_TODO,
    payload: {
      todo,
    },
  };
};

export type SetInProgressTodoAction = ReturnType<typeof setInProgressTodoAction>;
