// ./src/sagas/index.js

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_REPOS, RENDER_REPOS } from './actions';


export function* fetchRepos(action: any){
  const endpoint = `https://api.github.com/users/${action.username}/repos`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_REPOS, repos: data });
}

export function* loadRepos() {
  yield takeLatest(FETCH_REPOS, fetchRepos);

}