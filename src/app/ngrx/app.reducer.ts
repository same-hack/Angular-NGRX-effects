import { createReducer, on } from '@ngrx/store';
import { __asyncGenerator } from 'tslib';
import * as AppAction from './app.action';

/**
 *【ポイント】
 * ・引数を受け取る際には{ }で必ず囲うこと
 * ・必ず正しい型を指定すること
 * ・未設定となる可能性のあるプロパティには、"？"をつけること
 * ・ネストしたプロパティを更新したい場合はmap関数を使う
 * ・nullを許容したい場合、tsconfig.jsonのcompilerOptionsに以下を追記すること
 *      "strictNullChecks": false
 */

// デバッグツールでの表示名
export const featureName = 'main';

// 型の定義
export interface User {
  id: number;
  name: string;
  selected?: boolean;
}

// 型の定義
export interface UserDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// 型の定義
export interface State {
  users: User[];
  userDetail: UserDetail;
}

// 初期値の設定
export const initialState: State = {
  users: [],
  userDetail: null,
};

export const appReducer = createReducer(
  initialState,
  // 全てのユーザをSTOREに登録
  on(AppAction.fetchAllUsersDone, (state, { fetchedUsers }) => ({
    ...state,
    users: fetchedUsers,
  })),
  // 指定したユーザの詳細データをSTOREに登録
  on(AppAction.fetchUserDetailDone, (state, { fetchedUser }) => ({
    ...state,
    userDetail: fetchedUser,
  })),
  // 選択したユーザのselectedをtrueに、他のユーザをfalseに
  on(AppAction.updateSelectedState, (state, { id }) => ({
    ...state,
    users: state.users.map((user) => ({
      ...user,
      selected: user.id === id ? true : false,
    })),
  }))
);
