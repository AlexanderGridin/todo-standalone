import { Project } from "models";
import { api } from "./globals";

export const createProjectAsync = (project: Project): Promise<Project> => {
	return api.createProject(project);
};
