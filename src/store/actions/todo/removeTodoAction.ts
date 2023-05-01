import { TodoItem } from "models";
import { ActionType } from "store/models";

export const removeTodoAction = (todo: TodoItem) => {
  return {
    type: ActionType.REMOVE_TODO,
    payload: {
      todo,
    },
  };
};

export type RemoveTodoAction = ReturnType<typeof removeTodoAction>;
