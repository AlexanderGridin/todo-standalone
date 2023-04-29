import { ModalNameType } from "models";
import { ActionType } from "../../models/ActionType";

export const openModalAction = (modalName: ModalNameType) => {
  return {
    type: ActionType.OPEN_MODAL,
    payload: {
      modalName,
    },
  };
};

export type OpenModalAction = ReturnType<typeof openModalAction>;
