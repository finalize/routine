import {
  TOGGLE_MODAL_ADD_ROUTINE,
} from '../consistants/actionTypes';

export const toggleModalAddRoutine = (visible: boolean) => ({
  visible,
  type: TOGGLE_MODAL_ADD_ROUTINE,
});
