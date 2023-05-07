import { Button, TextInput } from "@alexandergridin/rtc-components-lib";
import { TodoItem } from "models";
import { ChangeEvent, FormEvent, useReducer } from "react";

import style from "./TodoForm.module.css";

export class TodoFormValue {
  public title = "";
}

interface TodoFormProps {
  todo: TodoItem | null;
  onSubmit: (todo: TodoItem) => void;
  onCancel: () => void;
}

export const TodoForm = ({ todo, onSubmit, onCancel }: TodoFormProps) => {
  const initialValue = todo ? { title: todo.title } : { ...new TodoFormValue() };

  const [formValue, setFormValue] = useReducer(
    (formValue: TodoFormValue, controlValue: Partial<TodoFormValue>) => ({
      ...formValue,
      ...controlValue,
    }),
    initialValue
  );

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    todo
      ? onSubmit({
          ...todo,
          ...formValue,
        })
      : onSubmit({ ...new TodoItem(), ...formValue });
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({ [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          id="title"
          name="title"
          label="Title"
          placeholder="Enter title"
          isAutoFocus
          value={formValue.title}
          onChange={handleFormValueChange}
        />
      </div>

      <div className={style.footer}>
        <Button style={{ marginRight: "10px" }} onClick={handleSubmit}>
          {todo ? "Update" : "Add"}
        </Button>

        <Button visualStyle="error" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
