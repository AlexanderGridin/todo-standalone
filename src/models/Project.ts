import { generateId } from "utils";
import { TodoItem } from "./TodoItem";

export class Project {
  public id: string = generateId();
  public name = "";
  public fileName = "";
  public activeTodos: any[] = [];
  public completedTodos: any[] = [];
  public createdTime!: number;
  public isEditing = false;
  public inProgressTodo: TodoItem | null = null;
}
