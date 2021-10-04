import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  data: [],
  contract: {},
};

export default function contracts(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@contracts/GET_CONTRACTS_REQUEST': {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case '@contracts/GET_CONTRACTS_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@contracts/GET_CONTRACT_REQUEST': {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case '@contracts/GET_CONTRACT_SUCCESS': {
        draft.contract = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@contracts/CREATE_CONTRACTS_REQUEST': {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case '@contracts/CREATE_CONTRACTS_SUCCESS': {
        draft.data = [action.payload.data, ...draft.data];
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@contracts/DELETE_CONTRACT_REQUEST': {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case '@contracts/DELETE_CONTRACT_SUCCESS': {
        draft.loading = false;
        draft.data = draft.data.filter(
          (item) => item.id !== action.payload.data.id,
        );
        break;
      }
      case '@contracts/CONTRACTS_FAILURE': {
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
