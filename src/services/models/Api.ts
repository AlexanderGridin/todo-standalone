import { Project } from "models";

export interface Api {
  init: () => Promise<string>;
  loadProjects: () => Promise<Project[]>;
  createProject: (project: Partial<Project>) => Promise<Project>;
  removeProject: (project: Project) => Promise<Project>;
  updateProject: (project: Project) => Promise<Project>;
}
