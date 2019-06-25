import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */

const selectUsersDomain = (state: { UsersReducer: any; }) => state.UsersReducer;

/**
 * Other specific selectors
 */



const makeSelectUsers = () =>
  createSelector(selectUsersDomain, substate => substate.toJS().users);

 

export default selectUsersDomain;
export {
    makeSelectUsers,
};
