import { Api } from "./Api";

export type Backend = Window &
	typeof globalThis & {
		eAPI: Api;
	};
