import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppService } from '../services/app.service';
import * as AppAction from './app.action';
import { zip } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private service: AppService,
    private store: Store
  ) {}

  // fetchAllUsers$ = createEffect((): any => {
  //   return this.actions$.pipe(
  //     ofType(AppAction.fetchAllUsers),
  //     switchMap(() => {
  //       return this.service.fetchUsers().pipe(
  //         map((response: any) => {
  //           const fetchedUsers: any[] = [];
  //           response.forEach((user: any) => {
  //             const userInfo = {
  //               id: user.id,
  //               name: user.name,
  //             };
  //             fetchedUsers.push(userInfo);
  //           });
  //           console.log('fetchedUsers', fetchedUsers);
  //           return AppAction.fetchAllUsersDone({ fetchedUsers });
  //         })
  //       );
  //     })
  //   );
  // });
}
