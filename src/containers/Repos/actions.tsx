export const RENDER_REPOS = 'RENDER_REPOS';
export const FETCH_REPOS = 'FETCH_REPOS';



export function fetchRepos(username: any) {
  return {
    type: FETCH_REPOS,
    username
  };
}