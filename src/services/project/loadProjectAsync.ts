import { Project } from "models";
import { api } from "services/globals";

export const loadProjectAsync = async (id: string): Promise<Project> => {
  return api.loadProject(id);
};
