import { Project } from "models";

export const pushProjectAction = (project: Project) => {
	return {
		type: "PUSH_PROJECT" as const,
		payload: {
			project,
		},
	};
};

export type PushProjectAction = ReturnType<typeof pushProjectAction>;
