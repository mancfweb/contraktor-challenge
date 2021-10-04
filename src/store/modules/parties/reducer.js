import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

export default function parties(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@parties/GET_PARTIES_REQUEST': {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case '@parties/GET_PARTIES_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@parties/CREATE_PARTIES_REQUEST': {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case '@parties/CREATE_PARTIES_SUCCESS': {
        draft.data = [action.payload.data, ...draft.data];
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@parties/PARTIES_FAILURE': {
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
