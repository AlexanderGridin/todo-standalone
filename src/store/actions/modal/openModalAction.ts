import { Modal } from "models";

export const openModalAction = (modalName: Modal) => {
	return {
		type: "OPEN_MODAL" as const,
		payload: {
			modalName,
		},
	};
};

export type OpenModalAction = ReturnType<typeof openModalAction>;
