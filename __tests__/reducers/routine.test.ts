import routineReducer, { initialState } from '../../src/reducers/routineReducer';
import configureStore from '../../src/store/configureStore';

import {
  TOGGLE_MODAL_ADD_ROUTINE,
} from '../../src/consistants/actionTypes';

describe('routine reducer', () => {
  const store = configureStore.getState();
  const routineState = store.routineReducer;
  test('return default initial state when no action is passed', () => {

    expect(routineState).toEqual(initialState);
  });
  test('return toggled visible `TOGGLE_MODAL_ADD_ROUTINE`', () => {
    const newState = routineReducer(
      routineState, { visible: true, type: TOGGLE_MODAL_ADD_ROUTINE },
    );
    const expected = {
      addRoutineVisible: true,
    };
    expect(newState).toEqual(expected);
  });
});
