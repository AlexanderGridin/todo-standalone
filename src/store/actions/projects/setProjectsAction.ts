import { Project } from "models";
import { ActionType } from "../../models";

export const setProjectsAction = (projects: Project[]) => {
  return {
    type: ActionType.SET_PROJECTS,
    payload: {
      projects,
    },
  };
};

export type SetProjectsAction = ReturnType<typeof setProjectsAction>;
