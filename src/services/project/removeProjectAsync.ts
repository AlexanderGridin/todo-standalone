import { Project } from "models";
import { api } from "../globals";

export const removeProjectAsync = (project: Project): Promise<Project> => {
  return api.removeProject(project);
};
