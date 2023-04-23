import { api } from "./globals";

export const toWayTestAsync = (payload: string) => {
	return api.toWayTest(payload);
};
