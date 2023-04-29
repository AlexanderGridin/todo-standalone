import { Project } from "models";
import { ActionType } from "../../models";

export const updateProjectAction = (project: Project) => {
  return {
    type: ActionType.UPDATE_PROJECT,
    payload: {
      project,
    },
  };
};

export type UpdateProjectAction = ReturnType<typeof updateProjectAction>;
