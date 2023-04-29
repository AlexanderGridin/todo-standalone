import { PushProjectAction } from "../../actions/project";
import { AppState } from "../../models";

export const pushProjectReducer = (state: AppState, action: PushProjectAction) => {
  return {
    ...state,
    projects: [...state.projects, action.payload.project],
  };
};
