import { api } from "./globals";

export const initAsync = async () => {
  return await api.init();
};
