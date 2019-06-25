
export const FETCH_USERS = 'FETCH_USERS';
export const RENDER_USERS = 'RENDER_USERS';
export const RENDER_REPOS = 'RENDER_REPOS';
export const FETCH_REPOS = 'FETCH_REPOS';


export function fetchUsers() {
  return {
    type: FETCH_USERS
  };
}


export function fetchRepos(username) {
  return {
    type: FETCH_REPOS,
    username
  };
}