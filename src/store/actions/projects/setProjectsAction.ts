import { Project } from "models";
import { AppActionType } from "store/models";

export const setProjectsAction = (projects: Project[]) => {
	return {
		type: AppActionType.SET_PROJECTS,
		payload: {
			projects,
		},
	};
};

export type SetProjectsAction = ReturnType<typeof setProjectsAction>;
