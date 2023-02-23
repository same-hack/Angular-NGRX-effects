import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName } from './app.reducer';

// 型の指定がないと動かない場合があります。
// export const selectUsersState = createFeatureSelector(featureName);

// /**ユーザの全情報を取得するセレクター */
// export const selectAllUsers = createSelector(selectUsersState, (state) => {
//   state;
// });

// export const selectSelectedUser = createSelector(
//   selectUsersState,
//   (state: State) => {
//     state.selectedUser;
//   }
// );
//////////////////////////////////////////////////////////////////////////////////////

// 型の指定がないと動かない場合があります。
export const appState = createFeatureSelector(featureName);

export const selectTest = createSelector(appState, (state) => state);
export const selectName = createSelector(appState, (state: any) => state.name);
