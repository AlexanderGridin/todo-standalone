import { OpenModalAction } from "../../actions/modal";
import { AppState } from "../../models";

export const openModalReducer = (state: AppState, action: OpenModalAction) => {
  return {
    ...state,
    modalMap: {
      ...state.modalMap,
      [action.payload.modalName]: {
        isOpen: true,
      },
    },
  };
};
