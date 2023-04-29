import { CloseModalAction } from "store/actions/modal";
import { AppState } from "store/models";

export const closeModalReducer = (state: AppState, action: CloseModalAction) => {
  return {
    ...state,
    modalMap: {
      ...state.modalMap,
      [action.payload.modalName]: {
        isOpen: false,
      },
    },
  };
};
