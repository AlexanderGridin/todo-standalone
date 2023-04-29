import { Project } from "models";

export const updateProjectAction = (project: Project) => {
  return {
    type: "UPDATE_PROJECT_ACTION" as const,
    payload: {
      project,
    },
  };
};

export type UpdateProjectAction = ReturnType<typeof updateProjectAction>;
