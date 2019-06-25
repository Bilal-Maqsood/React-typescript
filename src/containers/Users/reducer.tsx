import { RENDER_USERS } from './actions';
import { fromJS } from 'immutable';

export const initialState = fromJS({  
  users: [],
});

export default function UsersReducer(state = initialState, action: { type: any; users: any; }) {
  switch (action.type) {
    case RENDER_USERS:
        return state
          .set('users', action.users)
      default:
       return state;
  }
}