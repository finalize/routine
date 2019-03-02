import * as actionTypes from '../../src/consistants/actionTypes';

import {
  toggleModalAddRoutine,
} from '../../src/actions/routine';

describe('toggleModalAddRoutine', () => {
  test('returns an action with type `TOGGLE_MODAL_ADD_ROUTINE`', () => {
    const visible = true;
    const action = toggleModalAddRoutine(visible);
    expect(action).toEqual({
      visible,
      type: actionTypes.TOGGLE_MODAL_ADD_ROUTINE,
    });
  });
});
