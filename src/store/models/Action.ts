import { CloseModalAction, OpenModalAction } from "../actions/modal";
import { SetProjectsAction } from "../actions/projects";
import { PushProjectAction, RemoveProjectAction, UpdateProjectAction } from "../actions/project";

export type Action =
  | SetProjectsAction
  | PushProjectAction
  | UpdateProjectAction
  | OpenModalAction
  | CloseModalAction
  | RemoveProjectAction;
