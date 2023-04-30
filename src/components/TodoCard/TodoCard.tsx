import { Card } from "@alexandergridin/rtc-components-lib";
import { TodoItem } from "models";
import Checkbox from "@mui/material/Checkbox";

import style from "./TodoCard.module.css";
import { ChangeEvent } from "react";

export interface TodoCardProps {
  todo: TodoItem;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Card className={todo.isCompleted ? style.completed : ""}>
      <div className={style.container}>
        <div>
          <Checkbox
            checked={todo.isCompleted}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.type);
              console.log(e.target.checked);
            }}
          />
        </div>
        <h2 className={style.title}>{todo.title}</h2>
      </div>
    </Card>
  );
};
