import { CloseModalAction, OpenModalAction } from "store/actions/modal";
import {
	SetProjectsAction,
	PushProjectAction,
	RemoveProjectAction,
	UpdateProjectAction,
} from "../actions";

export type AppAction =
	| SetProjectsAction
	| PushProjectAction
	| UpdateProjectAction
	| OpenModalAction
	| CloseModalAction
	| RemoveProjectAction;
