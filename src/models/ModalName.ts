import { ValueOf } from "./ValueOf";

export const ModalName = {
  ProjectModal: "ProjectModal",
  TodoModal: "TodoModal",
} as const;

export type ModalNameType = ValueOf<typeof ModalName>;
