import { ValueOf } from "./ValueOf";

export const ModalName = {
  ProjectModal: "ProjectModal",
} as const;

export type ModalNameType = ValueOf<typeof ModalName>;
