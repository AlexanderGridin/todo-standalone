import { Project } from "models";

export const removeProjectAction = (project: Project) => {
  return {
    type: "REMOVE_PROJECT" as const,
    payload: {
      project,
    },
  };
};

export type RemoveProjectAction = ReturnType<typeof removeProjectAction>;
