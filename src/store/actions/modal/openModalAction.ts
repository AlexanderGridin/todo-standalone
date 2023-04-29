import { ModalNameType } from "models";

export const openModalAction = (modalName: ModalNameType) => {
  return {
    type: "OPEN_MODAL" as const,
    payload: {
      modalName,
    },
  };
};

export type OpenModalAction = ReturnType<typeof openModalAction>;
