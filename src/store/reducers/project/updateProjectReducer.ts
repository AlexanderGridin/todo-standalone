import { UpdateProjectAction } from "../../actions/project";
import { AppState } from "../../models";

export const updateProjectReducer = (state: AppState, action: UpdateProjectAction) => {
  return {
    ...state,
    projects: state.projects.map((project) => {
      return project.id !== action.payload.project.id ? { ...project } : { ...action.payload.project };
    }),
  };
};
