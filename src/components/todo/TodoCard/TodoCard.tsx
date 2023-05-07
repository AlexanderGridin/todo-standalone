import { Card } from "@alexandergridin/rtc-components-lib";
import { ModalName, TodoItem } from "models";
import Checkbox from "@mui/material/Checkbox";

import style from "./TodoCard.module.css";
import { ChangeEvent } from "react";
import { useAppState } from "store/hooks";
import { removeTodoAction, setInProgressTodoAction, updateTodoAction } from "store/actions/todo";
import { DeleteButton, EditButton, StartButton, StopButton } from "components/buttons";
import { openModalAction } from "store/actions/modal";

export interface TodoCardProps {
  todo: TodoItem;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const state = useAppState();

  const handleIsCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.dispatch(
      updateTodoAction({
        ...todo,
        isCompleted: e.target.checked,
      })
    );
  };

  const handleStartClick = () => {
    state.dispatch(setInProgressTodoAction({ ...todo, isInProgress: true }));
  };

  const handleStopClick = () => {
    state.dispatch(setInProgressTodoAction(null));
  };

  const handleEditClick = () => {
    state.dispatch(
      updateTodoAction({
        ...todo,
        isEditing: true,
      })
    );

    state.dispatch(openModalAction(ModalName.TodoModal));
  };

  const handleDeleteClick = () => {
    state.dispatch(removeTodoAction(todo));
  };

  return (
    <Card
      className={`${todo.isCompleted ? style.completed : ""}`}
      backgroundColor={`${todo.isInProgress ? "#ebcb8b" : "#FFF"}`}
    >
      <div className={style.container}>
        <div>
          <Checkbox checked={todo.isCompleted} onChange={handleIsCompletedChange} />
        </div>

        <h2 className={style.title}>{todo.title}</h2>

        <div style={{ marginLeft: "auto" }}>
          {todo.isCompleted ? null : todo.isInProgress ? (
            <StopButton tooltipText="Stop focusing on this todo" onClick={handleStopClick} />
          ) : (
            <StartButton tooltipText="Focus on this todo" onClick={handleStartClick} />
          )}

          {todo.isCompleted ? null : <EditButton tooltipText="Edit todo" onClick={handleEditClick} />}

          <DeleteButton tooltipText="Delete todo" onClick={handleDeleteClick} />
        </div>
      </div>
    </Card>
  );
};
