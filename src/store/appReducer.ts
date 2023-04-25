import { AppAction, AppState } from "./models";

export const appReducer = (state: AppState, action: AppAction) => {
	switch (action.type) {
		case "SET_PROJECTS":
			return {
				...state,
				projects: [...action.payload.projects],
			};

		default:
			return {
				...state,
			};
	}
};
