import { generateId } from "utils";

export class TodoItem {
  public id = generateId();
  public title = "";
  isCompleted = false;
}
