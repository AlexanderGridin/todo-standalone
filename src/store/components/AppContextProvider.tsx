import { PropsWithChildren, useReducer } from "react";
import { appReducer } from "store/appReducer";
import { initialState } from "store/initialState";
import { AppContext } from "./AppContext";

interface AppContextProviderProps extends PropsWithChildren {}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	console.log("AppState:", state);

	const providerValue = {
		projects: state.projects,
		dispatch,
	};

	return (
		<AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
	);
};
