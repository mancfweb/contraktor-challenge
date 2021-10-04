import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import {
  createContractsSuccess,
  getContractsSuccess,
  getContractSuccess,
  deleteContractSuccess,
  contractsFailure,
} from './actions';

export function* getContracts() {
  try {
    const {data} = yield call(api.get, '/contracts');

    yield put(getContractsSuccess(data));
  } catch (err) {
    yield put(contractsFailure());
  }
}

export function* getContract({payload}) {
  try {
    const {id} = payload.data;
    const {data} = yield call(api.get, `/contracts/${id}`);

    yield put(getContractSuccess(data));
  } catch (err) {
    yield put(contractsFailure());
  }
}

export function* createContract({payload}) {
  try {
    const {data} = yield call(api.post, '/contracts', payload.data);

    yield put(createContractsSuccess(data));
  } catch (err) {
    yield put(contractsFailure());
  }
}

export function* deleteContract({payload}) {
  try {
    const {id} = payload.data;
    const {data} = yield call(api.delete, `/contracts/${id}`);

    yield put(deleteContractSuccess(data));
  } catch (err) {
    yield put(contractsFailure());
  }
}

export default all([
  takeLatest('@contracts/GET_CONTRACTS_REQUEST', getContracts),
  takeLatest('@contracts/GET_CONTRACT_REQUEST', getContract),
  takeLatest('@contracts/CREATE_CONTRACTS_REQUEST', createContract),
  takeLatest('@contracts/DELETE_CONTRACT_REQUEST', deleteContract),
]);
