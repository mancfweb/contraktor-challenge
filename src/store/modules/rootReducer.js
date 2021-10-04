import {combineReducers} from 'redux';

import contracts from './contracts/reducer';
import parties from './parties/reducer';

export default combineReducers({
  contracts,
  parties,
});
