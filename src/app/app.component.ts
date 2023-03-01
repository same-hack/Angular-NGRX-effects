import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppSelector from './ngrx/app.selector';
import * as AppAction from './ngrx/app.action';
import * as AppReducer from './ngrx/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-NGRX-effects';
  constructor(private store: Store) {}

  /**
   *【ポイント】
   * ・必ず正しい型を指定すること
   * ・引数を渡す際には{ }で必ず囲うこと
   * ・dispatchに渡すActionには()をつけること
   * ・Selectorの戻り値であるObservableを受け取る変数名の末尾に$をつけること
   *   ※これはマストではありませんが、Angularの慣例なので極力付けましょう。
   * ・select関数は宣言するだけでは実行されない
   *   html側で | asyncを使用することで実行される
   * ・select関数をtsファイルで実行したい場合には以下のように記述する
   *   this.store.select(セレクタ名).subscribe((response)=>{ 処理 });
   *   ※この場合ngOnDestroyする際にunsubscribe()がマストになります
   */

  /**全てのユーザの情報を取得
   * */
  users$: Observable<AppReducer.User[]> = this.store.select(
    AppSelector.selectAllUsers
  );
  /**選択ユーザの取得 */
  selectedUser$: Observable<AppReducer.User> = this.store.select(
    AppSelector.selectSelectedUser
  );
  /**ユーザの詳細情報取得 */
  userDetail$: Observable<AppReducer.UserDetail> = this.store.select(
    AppSelector.selectUserDetail
  );

  ngOnInit() {
    // 全てのユーザを取得
    this.store.dispatch(AppAction.fetchAllUsers());
  }

  // 選択したユーザのselectedプロパティをtrueにする
  onUpdateSelectedState(id: number) {
    this.store.dispatch(AppAction.updateSelectedState({ id }));
  }

  // 選択したユーザの詳細情報を取得
  onFetchUserDetail(id: number) {
    this.store.dispatch(AppAction.fetchUserDetail({ id }));
  }
}
