export function getContractsRequest(data) {
  return {
    type: '@contracts/GET_CONTRACTS_REQUEST',
    payload: {data},
  };
}

export function getContractsSuccess(data) {
  return {
    type: '@contracts/GET_CONTRACTS_SUCCESS',
    payload: {data},
  };
}

export function getContractRequest(data) {
  return {
    type: '@contracts/GET_CONTRACT_REQUEST',
    payload: {data},
  };
}

export function getContractSuccess(data) {
  return {
    type: '@contracts/GET_CONTRACT_SUCCESS',
    payload: {data},
  };
}

export function createContractsRequest(data) {
  return {
    type: '@contracts/CREATE_CONTRACTS_REQUEST',
    payload: {data},
  };
}

export function createContractsSuccess(data) {
  return {
    type: '@contracts/CREATE_CONTRACTS_SUCCESS',
    payload: {data},
  };
}

export function deleteContractRequest(data) {
  return {
    type: '@contracts/DELETE_CONTRACT_REQUEST',
    payload: {data},
  };
}

export function deleteContractSuccess(data) {
  return {
    type: '@contracts/DELETE_CONTRACT_SUCCESS',
    payload: {data},
  };
}

export function contractsFailure() {
  return {
    type: '@contracts/CONTRACTS_FAILURE',
  };
}
