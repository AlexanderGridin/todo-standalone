import { AppState } from "./models";

export const initialState: AppState = {
  projects: [],
  dispatch: () => {},
  modalMap: {},
  openedProject: null,
};
