// ./src/sagas/index.js

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS, RENDER_USERS } from './actions';

export function* fetchToDoList() {
  const endpoint = 'https://api.github.com/users?since=135';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
//   const data = [
//     {login: "simonjefford", id: 136, node_id: "MDQ6VXNlcjEzNg==", avatar_url: "https://avatars2.githubusercontent.com/u/136?v=4"},
//     {login: "josh", id: 137, node_id: "MDQ6VXNlcjEzNw==", avatar_url: "https://avatars2.githubusercontent.com/u/137?v=4"},
//     {login: "stevedekorte", id: 138, node_id: "MDQ6VXNlcjEzOA==", avatar_url: "https://avatars3.githubusercontent.com/u/138?v=4"},
//     {login: "leahneukirchen", id: 139, node_id: "MDQ6VXNlcjEzOQ==", avatar_url: "https://avatars3.githubusercontent.com/u/139?v=4"},
//     {login: "cheapRoc", id: 140, node_id: "MDQ6VXNlcjE0MA==", avatar_url: "https://avatars2.githubusercontent.com/u/140?v=4",},
//     {login: "technomancy", id: 141, node_id: "MDQ6VXNlcjE0MQ==", avatar_url: "https://avatars2.githubusercontent.com/u/141?v=4"},
//     {login: "kenphused", id: 142, node_id: "MDQ6VXNlcjE0Mg==", avatar_url: "https://avatars2.githubusercontent.com/u/142?v=4"},
//     {login: "rubyist", id: 143, node_id: "MDQ6VXNlcjE0Mw==", avatar_url: "https://avatars2.githubusercontent.com/u/143?v=4"},
//     {login: "ogc", id: 144, node_id: "MDEyOk9yZ2FuaXphdGlvbjE0NA==", avatar_url: "https://avatars2.githubusercontent.com/u/144?v=4"},
//     {login: "lazyatom", id: 145, node_id: "MDQ6VXNlcjE0NQ==", avatar_url: "https://avatars2.githubusercontent.com/u/145?v=4"},
//     {login: "jdhuntington", id: 147, node_id: "MDQ6VXNlcjE0Nw==", avatar_url: "https://avatars2.githubusercontent.com/u/147?v=4"},
//     {login: "nwebb", id: 148, node_id: "MDQ6VXNlcjE0OA==", avatar_url: "https://avatars3.githubusercontent.com/u/148?v=4"},
//     {login: "nsutton", id: 149, node_id: "MDQ6VXNlcjE0OQ==", avatar_url: "https://avatars3.githubusercontent.com/u/149?v=4"},
//     {login: "sevenwire", id: 150, node_id: "MDEyOk9yZ2FuaXphdGlvbjE1MA==", avatar_url: "https://avatars3.githubusercontent.com/u/150?v=4"},
//     {login: "brandonarbini", id: 151, node_id: "MDQ6VXNlcjE1MQ==", avatar_url: "https://avatars3.githubusercontent.com/u/151?v=4"},
//     {login: "al3x", id: 152, node_id: "MDQ6VXNlcjE1Mg==", avatar_url: "https://avatars3.githubusercontent.com/u/152?v=4"},
//     {login: "toolmantim", id: 153, node_id: "MDQ6VXNlcjE1Mw==", avatar_url: "https://avatars3.githubusercontent.com/u/153?v=4"},
//     {login: "nicksieger", id: 154, node_id: "MDQ6VXNlcjE1NA==", avatar_url: "https://avatars3.githubusercontent.com/u/154?v=4"},
//     {login: "jicksta", id: 155, node_id: "MDQ6VXNlcjE1NQ==", avatar_url: "https://avatars3.githubusercontent.com/u/155?v=4"},
//     {login: "joshsusser", id: 156, node_id: "MDQ6VXNlcjE1Ng==", avatar_url: "https://avatars3.githubusercontent.com/u/156?v=4"},
//     {login: "jcrosby", id: 157, node_id: "MDQ6VXNlcjE1Nw==", avatar_url: "https://avatars3.githubusercontent.com/u/157?v=4"},
//     {login: "thewoolleyman", id: 158, node_id: "MDQ6VXNlcjE1OA==", avatar_url: "https://avatars2.githubusercontent.com/u/158?v=4"},
//     {login: "technicalpickles", id: 159, node_id: "MDQ6VXNlcjE1OQ==", avatar_url: "https://avatars2.githubusercontent.com/u/159?v=4"},
//     {login: "halbtuerke", id: 160, node_id: "MDQ6VXNlcjE2MA==", avatar_url: "https://avatars1.githubusercontent.com/u/160?v=4"},
//     {login: "ryanb", id: 161, node_id: "MDQ6VXNlcjE2MQ==", avatar_url: "https://avatars1.githubusercontent.com/u/161?v=4"},
//     {login: "cnix", id: 162, node_id: "MDQ6VXNlcjE2Mg==", avatar_url: "https://avatars1.githubusercontent.com/u/162?v=4"},
//     {login: "tpitale", id: 163, node_id: "MDQ6VXNlcjE2Mw==", avatar_url: "https://avatars1.githubusercontent.com/u/163?v=4"},
//     {login: "cdcarter", id: 164, node_id: "MDQ6VXNlcjE2NA==", avatar_url: "https://avatars1.githubusercontent.com/u/164?v=4"},
//     {login: "atduskgreg", id: 165, node_id: "MDQ6VXNlcjE2NQ==", avatar_url: "https://avatars1.githubusercontent.com/u/165?v=4"},
//     {login: "heff", id: 166, node_id: "MDQ6VXNlcjE2Ng==", avatar_url: "https://avatars1.githubusercontent.com/u/166?v=4"}
// ]
  yield put({ type: RENDER_USERS, users: data });
}


export function* loadUsers() {
  yield takeLatest(FETCH_USERS, fetchToDoList);
}
