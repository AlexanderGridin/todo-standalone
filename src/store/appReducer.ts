import { Action, AppState } from "./models";
import { ActionType } from "./models/ActionType";
import { closeModalReducer, openModalReducer } from "./reducers/modal";
import { setOpenedProjectReducer } from "./reducers/openedProject";
import { pushProjectReducer, removeProjectReducer, updateProjectReducer } from "./reducers/project";
import { setProjectsReducer } from "./reducers/projects";
import { pushTodoReducer, removeTodoReducer, setInProgressTodoReducer, updateTodoReducer } from "./reducers/todo";

export const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    // Projects
    case ActionType.SET_PROJECTS:
      return setProjectsReducer(state, action);

    // Project
    case ActionType.PUSH_PROJECT:
      return pushProjectReducer(state, action);

    case ActionType.REMOVE_PROJECT:
      return removeProjectReducer(state, action);

    case ActionType.UPDATE_PROJECT:
      return updateProjectReducer(state, action);

    // Modal
    case ActionType.OPEN_MODAL:
      return openModalReducer(state, action);

    case ActionType.CLOSE_MODAL:
      return closeModalReducer(state, action);

    // Opened Project
    case ActionType.SET_OPENED_PROJECT:
      return setOpenedProjectReducer(state, action);

    // Todo
    case ActionType.PUSH_TODO:
      return pushTodoReducer(state, action);

    case ActionType.UPDATE_TODO:
      return updateTodoReducer(state, action);

    case ActionType.REMOVE_TODO:
      return removeTodoReducer(state, action);

    case ActionType.SET_IN_PROGRESS_TODO:
      return setInProgressTodoReducer(state, action);

    // Default
    default:
      return {
        ...state,
      };
  }
};
