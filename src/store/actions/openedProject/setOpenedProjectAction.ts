import { Project } from "models";
import { ActionType } from "store/models";

export const setOpenedProjectAction = (project: Project | null) => {
  return {
    type: ActionType.SET_OPENED_PROJECT,
    payload: {
      project,
    },
  };
};

export type SetOpenedProjectAction = ReturnType<typeof setOpenedProjectAction>;
