import { RemoveProjectAction } from "../../actions/project";
import { AppState } from "../../models";

export const removeProjectReducer = (state: AppState, action: RemoveProjectAction) => {
  return {
    ...state,
    projects: state.projects.filter((project) => project.id !== action.payload.project.id),
  };
};
