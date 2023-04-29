import { Project } from "models";
import { api } from "./globals";

export const getProjectsAsync = (): Promise<Project[]> => {
	return api.loadProjects();
};
