export function getPartiesRequest(data) {
  return {
    type: '@parties/GET_PARTIES_REQUEST',
    payload: {data},
  };
}

export function getPartiesSuccess(data) {
  return {
    type: '@parties/GET_PARTIES_SUCCESS',
    payload: {data},
  };
}

export function createPartiesRequest(data) {
  return {
    type: '@parties/CREATE_PARTIES_REQUEST',
    payload: {data},
  };
}

export function createPartiesSuccess(data) {
  return {
    type: '@parties/CREATE_PARTIES_SUCCESS',
    payload: {data},
  };
}

export function partiesFailure() {
  return {
    type: '@parties/PARTIES_FAILURE',
  };
}
