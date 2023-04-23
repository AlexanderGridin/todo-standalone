export interface Api {
	init: () => Promise<string>;
	toWayTest: (payload: string) => Promise<string>;
}
