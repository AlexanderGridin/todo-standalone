import { SetOpenedProjectAction } from "store/actions/openedProject";
import { AppState } from "store/models";

export const setOpenedProjectReducer = (state: AppState, action: SetOpenedProjectAction) => {
  return {
    ...state,
    openedProject: action.payload.project ? { ...action.payload.project } : null,
  };
};
