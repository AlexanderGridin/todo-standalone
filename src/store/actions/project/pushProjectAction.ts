import { Project } from "models";
import { ActionType } from "../../models";

export const pushProjectAction = (project: Project) => {
  return {
    type: ActionType.PUSH_PROJECT,
    payload: {
      project,
    },
  };
};

export type PushProjectAction = ReturnType<typeof pushProjectAction>;
