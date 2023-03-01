import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppReducer from './app.reducer';

/**
 *【ポイント】
 * ・必ず正しい型を指定すること
 * ・特定のデータを取得する場合には、findやfilterがよく使われる
 */

// 型の指定がないと動かない場合があります。
export const selectUsersState = createFeatureSelector<AppReducer.State>(
  AppReducer.featureName
);

/**ユーザの全情報を取得するセレクター */
export const selectAllUsers = createSelector(
  selectUsersState,
  (state: AppReducer.State) => state.users
);

/**ユーザの詳細情報を取得するセレクター */
export const selectUserDetail = createSelector(
  selectUsersState,
  (state: AppReducer.State) => state.userDetail
);

export const selectSelectedUser = createSelector(
  selectUsersState,
  (state: AppReducer.State) =>
    // selected === trueのユーザを探して返す
    state.users.find((user: AppReducer.User) => user.selected === true)
);
