import {
  TOGGLE_MODAL_ADD_ROUTINE,
} from '../consistants/actionTypes';

export const toggleModalAddRoutine = (visible: boolean): { visible: boolean, type: string } => ({
  visible,
  type: TOGGLE_MODAL_ADD_ROUTINE,
});
