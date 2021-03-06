import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const _nullSession = {id: null};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return newState;
  }
};
