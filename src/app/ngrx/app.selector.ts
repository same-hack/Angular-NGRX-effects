import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, State } from './app.reducer';

// 型の指定がないと動かない場合があります。
export const selectUsersState = createFeatureSelector<State>(featureName);

/**ユーザの全情報を取得するセレクター */
export const selectAllUsers = createSelector(
  selectUsersState,
  (state: State) => {
    state.users;
  }
);

export const selectSelectedUser = createSelector(
  selectUsersState,
  (state: State) => {
    state.selectedUser;
  }
);
