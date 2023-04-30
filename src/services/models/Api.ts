import { Project } from "models";

export interface Api {
  // Init
  init: () => Promise<string>;

  // Projects
  loadProjects: () => Promise<Project[]>;

  // Project
  loadProject: (id: string) => Promise<Project>;
  createProject: (project: Partial<Project>) => Promise<Project>;
  removeProject: (project: Project) => Promise<Project>;
  updateProject: (project: Project) => Promise<Project>;
}
