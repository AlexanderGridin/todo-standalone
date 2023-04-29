import { Project } from "models";
import { AppAction, AppState } from "./models";

export const appReducer = (state: AppState, action: AppAction) => {
	switch (action.type) {
		case "SET_PROJECTS":
			return {
				...state,
				projects: [...action.payload.projects],
			};

		case "PUSH_PROJECT":
			return {
				...state,
				projects: [...state.projects, action.payload.project],
			};

		case "REMOVE_PROJECT":
			return {
				...state,
				projects: state.projects.filter(
					(project: Project) => project.id !== action.payload.project.id
				),
			};

		case "UPDATE_PROJECT_ACTION":
			return {
				...state,
				projects: state.projects.map((project: Project) => {
					return project.id !== action.payload.project.id
						? { ...project }
						: { ...action.payload.project };
				}),
			};

		case "OPEN_MODAL":
			return {
				...state,
				modalMap: {
					...state.modalMap,
					[action.payload.modalName]: {
						isOpen: true,
					},
				},
			};

		case "CLOSE_MODAL":
			return {
				...state,
				modalMap: {
					...state.modalMap,
					[action.payload.modalName]: {
						isOpen: false,
					},
				},
			};

		default:
			return {
				...state,
			};
	}
};
