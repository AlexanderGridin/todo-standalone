import { Project } from "models";
import { api } from "./globals";

export const updateProjectAsync = async (project: Project): Promise<Project> => {
  return await api.updateProject(project);
};
