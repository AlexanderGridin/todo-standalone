import { PropsWithChildren, useReducer } from "react";
import { appReducer } from "store/appReducer";
import { initialState } from "store/initialState";
import { AppState } from "store/models";
import { AppContext } from "./AppContext";

interface AppContextProviderProps extends PropsWithChildren {}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	console.log("AppState:", state);

	const providerValue: AppState = {
		projects: state.projects,
		modalMap: state.modalMap,
		dispatch,
	};

	return (
		<AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
	);
};
