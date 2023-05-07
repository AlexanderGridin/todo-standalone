import { Modal } from "@alexandergridin/rtc-components-lib";
import { ModalName, TodoItem } from "models";
import { closeModalAction } from "store/actions/modal";
import { pushTodoAction, updateTodoAction } from "store/actions/todo";
import { useAppState } from "store/hooks";

import { TodoForm } from "../TodoForm";

export const TodoModal = () => {
  const state = useAppState();

  const isOpen = state.modalMap[ModalName.TodoModal]?.isOpen ?? false;

  const activeTodos = [...(state.openedProject?.activeTodos ?? [])];
  const completedTodos = [...(state.openedProject?.completedTodos ?? [])];
  const activeAndCompletedTodos = [...activeTodos, ...completedTodos];

  const inProgressTodo = { ...state.openedProject?.inProgressTodo } ?? null;

  const todos = inProgressTodo ? [inProgressTodo, ...activeAndCompletedTodos] : activeAndCompletedTodos;

  const todoInEditState = todos.find((todo) => todo.isEditing) ?? null;

  const closeModal = () => {
    state.dispatch(closeModalAction(ModalName.TodoModal));
  };

  const handleSubmit = async (todo: TodoItem) => {
    todoInEditState
      ? state.dispatch(
          updateTodoAction({
            ...todo,
            isEditing: false,
          })
        )
      : state.dispatch(pushTodoAction(todo));

    closeModal();
  };

  const handleCancel = () => {
    if (todoInEditState) {
      state.dispatch(
        updateTodoAction({
          ...todoInEditState,
          isEditing: false,
        })
      );
    }

    closeModal();
  };

  return isOpen ? (
    <Modal title={todoInEditState ? "Edit todo" : "Add todo"} open={isOpen}>
      <TodoForm todo={todoInEditState} onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  ) : null;
};
