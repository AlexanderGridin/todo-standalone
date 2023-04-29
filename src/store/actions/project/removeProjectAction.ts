import { Project } from "models";
import { ActionType } from "../../models";

export const removeProjectAction = (project: Project) => {
  return {
    type: ActionType.REMOVE_PROJECT,
    payload: {
      project,
    },
  };
};

export type RemoveProjectAction = ReturnType<typeof removeProjectAction>;
