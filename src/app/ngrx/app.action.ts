import { createAction, props } from '@ngrx/store';

// /**ユーザ取得時に呼び出し */
// export const fetchAllUsers = createAction(`[App Component] Fetch All Users`);

// /**ユーザ取得完了時に呼び出し */
// export const fetchAllUsersDone = createAction(
//   `[App Component] Fetch All Users Done`,
//   props<{ fetchedUsers: any[] }>()
// );

//////////////////////////////////////////////////////////////

export const updateUserName = createAction(
  `[App Component] update`,
  props<{ newName: string }>()
);
