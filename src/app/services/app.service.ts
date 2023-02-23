import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  /**http通信をしてデータを取得 */
  fetchUsers(): any {
    console.log('fetchUsers');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  fetchUsers2(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
