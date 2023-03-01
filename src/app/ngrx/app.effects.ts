import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { AppService } from '../services/app.service';
import * as AppAction from './app.action';
import * as AppReducer from './app.reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private service: AppService) {}

  /**
   *【ポイント】
   * ・必ず正しい型を指定すること
   * ・引数を受け取る際には{ }で囲うこと
   * ・呼び出すためのアクション/STORE登録するためのアクションをセットで使う
   * ・ofType() で指定したアクションがdispatchされた際に実行される
   * ・STORE登録するためのアクションをreturnすること
   */

  fetchAllUsers$ = createEffect((): any => {
    return this.actions$.pipe(
      // AppAction.fetchAllUsersがdispatchされたら実行する
      ofType(AppAction.fetchAllUsers),
      switchMap(() => {
        // serviceファイルのfetchUsersを実行する
        return this.service.fetchUsers().pipe(
          // fetchUsersの戻り値を受け取る
          map((response: any) => {
            // 必要なプロパティのみを抽出してUser型として宣言
            const fetchedUsers: AppReducer.User[] = [];
            response.forEach((user: AppReducer.UserDetail) => {
              // User型に該当するプロパティのみを抽出
              const userInfo = {
                id: user.id,
                name: user.name,
                selected: false,
              };
              // 配列へ追加
              fetchedUsers.push(userInfo);
            });
            console.log('fetchedUsers', fetchedUsers);
            // fetchAllUsersDoneへ値を渡す
            // ※STOREへの登録はReducerで定義される
            return AppAction.fetchAllUsersDone({ fetchedUsers });
          })
        );
      })
    );
  });

  fetchUserDetail$ = createEffect((): any => {
    return this.actions$.pipe(
      // AppAction.fetchUserDetailがdispatchされたら実行する
      ofType(AppAction.fetchUserDetail),
      // 引数を受け取る
      switchMap(({ id }) => {
        // serviceファイルのfetchUserDetailを実行する
        return this.service.fetchUserDetail(id).pipe(
          map((fetchedUser: any) => {
            console.log('fetchedUser', fetchedUser);
            // fetchAllUsersDoneへ値を渡す
            // ※STOREへの登録はReducerで定義される
            return AppAction.fetchUserDetailDone({ fetchedUser });
          })
        );
      })
    );
  });
}
