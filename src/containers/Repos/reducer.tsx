import { RENDER_REPOS } from './actions';
import { fromJS } from 'immutable';

export const initialState = fromJS({  
    repos: [],
});

export default function ReposReducer(state = initialState, action: { type: any; repos: any; }) {
  switch (action.type) {
    case RENDER_REPOS:
        return state
          .set('repos', action.repos)
      default:
       return state;
  }
}