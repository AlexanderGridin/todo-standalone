import { Dispatch } from "react";
import { Project } from "models";
import { Action } from "./Action";

export interface AppState {
  projects: Project[];
  dispatch: Dispatch<Action>;
  modalMap: Partial<{
    [name: string]: {
      isOpen: boolean;
    };
  }>;
}
