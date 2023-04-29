import { ModalNameType } from "models";

export const closeModalAction = (modalName: ModalNameType) => {
  return {
    type: "CLOSE_MODAL" as const,
    payload: {
      modalName,
    },
  };
};

export type CloseModalAction = ReturnType<typeof closeModalAction>;
