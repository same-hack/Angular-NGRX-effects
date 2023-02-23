import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectName, selectTest } from './ngrx/app.selector';
import { updateUserName } from './ngrx/app.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent {
//   title = 'Angular-NGRX-effects';
//   constructor(private service: AppService, private store: Store) {}

//   /**全てのユーザの情報を取得※宣言するだけでは実行されない */
//   // users$: Observable<any> = this.store.select(selectAllUsers);
//   // selectedUser$: Observable<any> = this.store.select(selectSelectedUser);
//   ngOnInit() {
//     console.log('init');
//     this.store.dispatch(fetchAllUsers());

//     this.store.select(selectAllUsers).subscribe((res) => {
//       console.log('res', res);
//     });
//   }
// }
export class AppComponent {
  title = 'Angular-NGRX-effects';
  constructor(private service: AppService, private store: Store) {}

  /**全てのユーザの情報を取得※宣言するだけでは実行されない */
  // users$: Observable<any> = this.store.select(selectAllUsers);
  testUser$: Observable<any> = this.store.select(selectTest);
  testName$: Observable<any> = this.store.select(selectName);
  ngOnInit() {
    // this.store.dispatch(fetchAllUsers());
  }

  onClick() {
    this.store.dispatch(updateUserName({ newName: 'XXXXXXXX' }));
  }
}
