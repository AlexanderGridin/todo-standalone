import { ModalNameType } from "models";
import { ActionType } from "../../models/ActionType";

export const closeModalAction = (modalName: ModalNameType) => {
  return {
    type: ActionType.CLOSE_MODAL,
    payload: {
      modalName,
    },
  };
};

export type CloseModalAction = ReturnType<typeof closeModalAction>;
