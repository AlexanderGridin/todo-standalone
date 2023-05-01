import { CloseModalAction, OpenModalAction } from "../actions/modal";
import { SetProjectsAction } from "../actions/projects";
import { PushProjectAction, RemoveProjectAction, UpdateProjectAction } from "../actions/project";
import { SetOpenedProjectAction } from "../actions/openedProject";
import { PushTodoAction, RemoveTodoAction, SetInProgressTodoAction, UpdateTodoAction } from "store/actions/todo";

export type Action =
  | SetProjectsAction
  | PushProjectAction
  | UpdateProjectAction
  | OpenModalAction
  | CloseModalAction
  | SetOpenedProjectAction
  | PushTodoAction
  | UpdateTodoAction
  | RemoveTodoAction
  | SetInProgressTodoAction
  | RemoveProjectAction;
