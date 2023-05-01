import { TodoItem } from "models";
import { ActionType } from "store/models";

export const pushTodoAction = (todo: TodoItem) => {
  return {
    type: ActionType.PUSH_TODO,
    payload: {
      todo,
    },
  };
};

export type PushTodoAction = ReturnType<typeof pushTodoAction>;
