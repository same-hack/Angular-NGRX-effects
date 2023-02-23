import { createAction, props } from '@ngrx/store';
import { User } from './app.reducer';

/**ユーザ取得時に呼び出し */
export const fetchAllUsers = createAction(`[App Component] Fetch All Users`);

/**ユーザ取得完了時に呼び出し */
export const fetchAllUsersDone = createAction(
  `[App Component] Fetch All Users Done`,
  props<{ fetchedUsers: User[] }>()
);
