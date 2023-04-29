import { SetProjectsAction } from "../../actions/projects";
import { AppState } from "../../models";

export const setProjectsReducer = (state: AppState, action: SetProjectsAction) => {
  return {
    ...state,
    projects: [...action.payload.projects],
  };
};
