
export const FETCH_USERS = 'FETCH_USERS';
export const RENDER_USERS = 'RENDER_USERS';

export function fetchUsers() {
    console.log('jjjjj');
  return {
    type: FETCH_USERS
  };
}