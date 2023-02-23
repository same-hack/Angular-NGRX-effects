import { createReducer, on } from '@ngrx/store';
import { __asyncGenerator } from 'tslib';
import { updateUserName } from './app.action';

// デバッグツールでの表示名
export const featureName = 'main';

// // 型の定義
// export interface User {
//   id: number;
//   name: string;
// }

// // 型の定義
// export interface State {
//   users: User[];
//   selectedUser: User;
// }

// export const appReducer = createReducer(
//   initialState,
//   on(fetchAllUsersDone, (state, { fetchedUsers }) => ({
//     ...state,
//     users: fetchedUsers,
//   }))
// );

// export const appReducer = createReducer(
//   initialState,
//   on(fetchAllUsersDone, (state, { fetchedUsers }) => state:fetchedUsers)
// );

//////////////////////////////////////////////////////////////////////////////////////
/**初期値の設定　※これをSTOREで状態管理する */
// export const initialState: State = {
//   users: [],
//   selectedUser: { id: 999, name: 'samehack' },
// };
export const initialState = {
  // selectedUser: { id: 999, name: 'samehack' },
  id: 999,
  name: 'samehack',
};
export const appReducer = createReducer(
  initialState,
  on(updateUserName, (state, { newName }) => ({ ...state, name: newName }))
);

// export const initialState = {};
