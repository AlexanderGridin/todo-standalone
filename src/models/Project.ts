import { generateId } from "utils";

export class Project {
  public id: string = generateId();
  public name = "";
  public fileName = "";
  public activeTodos: any[] = [];
  public completedTodos: any[] = [];
  public createdTime!: number;
  public isEditing = false;
}
