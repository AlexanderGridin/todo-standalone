import { createContext } from "react";
import { AppState } from "store/models";

export interface AppContextProps extends AppState {}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
