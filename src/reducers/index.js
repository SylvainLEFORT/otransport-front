import { combineReducers } from 'redux';
import reducer from './reducer';

// import des differents reducers

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  reducer: reducer,
});

export default rootReducer;
