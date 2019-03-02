import {
  TOGGLE_MODAL_ADD_ROUTINE,
} from '../consistants/actionTypes';

import { RoutineAction } from '../actions/routine';

type RoutineState = {
  addRoutineVisible: boolean;
};

export const initialState: RoutineState = {
  addRoutineVisible: false,
};

const reducer = (state = initialState, action: RoutineAction): RoutineState => {
  switch (action.type) {
    case TOGGLE_MODAL_ADD_ROUTINE:
      return {
        ...state,
        addRoutineVisible: action.visible,
      };
    default:
      return state;
  }
};

export default reducer;
