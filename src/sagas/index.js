// ./src/sagas/index.js

import { all, fork } from 'redux-saga/effects';
import { loadUsers } from '../containers/Users/saga';
import { loadRepos } from '../containers/Repos/saga';


export default function* rootSaga() {
  yield all([
    fork(loadUsers),
    fork(loadRepos)
  ])
}