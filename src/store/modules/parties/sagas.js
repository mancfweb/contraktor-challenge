import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import {
  createPartiesSuccess,
  getPartiesSuccess,
  partiesFailure,
} from './actions';

export function* getParties({payload}) {
  try {
    const response = yield call(api.get, '/parties', {params: payload.data});

    const {data} = response;

    yield put(getPartiesSuccess(data));
  } catch (err) {
    yield put(partiesFailure());
  }
}

export function* createPartie({payload}) {
  try {
    const {data} = yield call(api.post, '/parties', payload.data);

    yield put(createPartiesSuccess(data));
  } catch (err) {
    yield put(partiesFailure());
  }
}

export default all([
  takeLatest('@parties/GET_PARTIES_REQUEST', getParties),
  takeLatest('@parties/CREATE_PARTIES_REQUEST', createPartie),
]);
