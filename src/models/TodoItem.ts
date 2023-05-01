import { generateId } from "utils";

export class TodoItem {
  public id = generateId();
  public title = "";
  public isCompleted = false;
  public isEditing = false;
  public isInProgress = false;
}
