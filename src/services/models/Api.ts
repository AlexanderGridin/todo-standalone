import { Project } from "models";

export interface Api {
	init: () => Promise<string>;
	loadProjects: () => Promise<Project[]>;
	toWayTest: (payload: string) => Promise<string>;
}
