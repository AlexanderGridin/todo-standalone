import { Dispatch } from "react";
import { Project } from "models";
import { AppAction } from "./AppAction";

export interface AppState {
  projects: Project[];
  dispatch: Dispatch<AppAction>;
  modalMap: {
    [name: string]: {
      isOpen: boolean;
    };
  };
}
