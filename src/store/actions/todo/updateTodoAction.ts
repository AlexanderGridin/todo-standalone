import { TodoItem } from "models";
import { ActionType } from "store/models";

export const updateTodoAction = (todo: TodoItem) => {
  return {
    type: ActionType.UPDATE_TODO,
    payload: {
      todo,
    },
  };
};

export type UpdateTodoAction = ReturnType<typeof updateTodoAction>;
