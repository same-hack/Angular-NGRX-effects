import { createAction, props } from '@ngrx/store';
import * as AppReducer from './app.reducer';
/**
 *【ポイント】
 * ・引数を渡す際には{ }で必ず囲うこと
 * ・必ず正しい型を指定すること
 */

///////////////////////////全ユーザ取得///////////////////////////////////

/**全ユーザ取得時に呼び出し※APIを実行 */
export const fetchAllUsers = createAction(`[App Component] Fetch All Users`);

/**全ユーザ取得完了時に呼び出し※STOREへ登録 */
export const fetchAllUsersDone = createAction(
  `[App Component] Fetch All Users Done`,
  props<{ fetchedUsers: AppReducer.User[] }>()
);

///////////////////////////ユーザ詳細取得/////////////////////////////////

/**ユーザ詳細取得時に呼び出し※APIを実行 */
export const fetchUserDetail = createAction(
  `[App Component] Fetch User Detail`,
  props<{ id: number }>()
);

/**ユーザ詳細取得完了時に呼び出し※STOREへ登録 */
export const fetchUserDetailDone = createAction(
  `[App Component] Fetch User Detail Done`,
  props<{ fetchedUser: AppReducer.UserDetail }>()
);

//////////////////////////////////////////////////////////////

/**選択したユーザのselectedプロパティをtrueにする */
export const updateSelectedState = createAction(
  `[App Component] Update Selected State`,
  props<{ id: number }>()
);
