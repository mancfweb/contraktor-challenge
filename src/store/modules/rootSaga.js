import {all} from 'redux-saga/effects';

import contracts from './contracts/sagas';
import parties from './parties/sagas';

export default function* rootSaga() {
  return yield all([contracts, parties]);
}
