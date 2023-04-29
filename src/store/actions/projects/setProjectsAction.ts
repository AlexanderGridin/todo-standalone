import { Project } from "models";

export const setProjectsAction = (projects: Project[]) => {
	return {
		type: "SET_PROJECTS" as const,
		payload: {
			projects,
		},
	};
};

export type SetProjectsAction = ReturnType<typeof setProjectsAction>;
