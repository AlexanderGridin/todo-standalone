import { Modal } from "@alexandergridin/rtc-components-lib";
import { TodoForm } from "components/TodoForm";
import { ModalName, TodoItem } from "models";
import { closeModalAction } from "store/actions/modal";
import { pushTodoAction, updateTodoAction } from "store/actions/todo";
import { useAppState } from "store/hooks";

export const TodoModal = () => {
  const state = useAppState();
  const isOpen = state.modalMap[ModalName.TodoModal]?.isOpen ?? false;

  const todos = [...(state.openedProject?.activeTodos ?? []), ...(state.openedProject?.completedTodos ?? [])];
  const todoInEditState =
    (state.openedProject?.inProgressTodo ? [{ ...state.openedProject.inProgressTodo }, ...todos] : todos).find(
      (todo) => todo.isEditing
    ) ?? null;

  const closeModal = () => {
    state.dispatch(closeModalAction(ModalName.TodoModal));
  };

  const handleSubmit = async (todo: TodoItem) => {
    if (todoInEditState) {
      const updatedTodo = {
        ...todo,
        isEditing: false,
      };

      state.dispatch(updateTodoAction({ ...updatedTodo }));
      closeModal();

      return;
    }

    state.dispatch(pushTodoAction({ ...todo }));
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
    <Modal title={"Todo"} open={isOpen}>
      <TodoForm todo={todoInEditState} onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  ) : null;
};
