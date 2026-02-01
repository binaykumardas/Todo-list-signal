import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  //private data = localStorage.getItem('token');
  private token = signal<string | null>('');

  public isAuthenticated = computed(() => !!this.token());
  
  constructor(
    private _http: HttpClient
  ) {}

  public login(token:string) {
    //localStorage.setItem('token', token);
    this.token.set(token);
  }

  public logout() {
    //localStorage.removeItem('token');
    this.token.set(null);
  }
}
