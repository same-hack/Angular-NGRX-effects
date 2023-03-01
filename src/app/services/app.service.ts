import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  /**http通信をして全てのユーザデータを取得 */
  fetchUsers() {
    console.log('fetchUsers');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  /**http通信をして指定したIDのユーザの詳細データを取得 */
  fetchUserDetail(id: number) {
    console.log('fetchUserDetail');
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
