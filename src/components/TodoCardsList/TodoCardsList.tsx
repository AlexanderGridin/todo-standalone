import { Fab } from "components/Fab";
import { TodoCard } from "components/TodoCard";
import { TodoModal } from "components/TodoModal";
import { ModalName, TodoItem } from "models";
import { openModalAction } from "store/actions/modal";
import { useAppState } from "store/hooks";

import style from "./TodoCardsList.module.css";

interface TodoCardsListProps {
  todos: TodoItem[];
  isShowAddButton?: boolean;
}

export const TodoCardsList = ({ todos, isShowAddButton = true }: TodoCardsListProps) => {
  const state = useAppState();

  const handleAddButtonClick = () => {
    state.dispatch(openModalAction(ModalName.TodoModal));
  };

  const footer = (
    <>
      <Fab tooltipText="Add todo" onClick={handleAddButtonClick} />
      <TodoModal />
    </>
  );

  return todos.length ? (
    <>
      <ul className={`list-plain ${style.list}`}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoCard todo={todo} />
          </li>
        ))}
      </ul>

      {isShowAddButton && footer}
    </>
  ) : (
    <>
      {!state.openedProject?.inProgressTodo && (
        <h2 style={{ color: "#FFF", textAlign: "center" }}>You don't have any active todos...</h2>
      )}

      {isShowAddButton && footer}
    </>
  );
};
