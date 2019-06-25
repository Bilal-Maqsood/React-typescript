import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */

const selectReposDomain = (state: { ReposReducer: any; }) => state.ReposReducer;

/**
 * Other specific selectors
 */



const makeSelectRepos = () =>
  createSelector(selectReposDomain, substate => substate.toJS().repos);

 

export default selectReposDomain;
export {
    makeSelectRepos,
};
