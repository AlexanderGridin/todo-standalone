import { Modal } from "models";

export const closeModalAction = (modalName: Modal) => {
	return {
		type: "CLOSE_MODAL" as const,
		payload: {
			modalName,
		},
	};
};

export type CloseModalAction = ReturnType<typeof closeModalAction>;
