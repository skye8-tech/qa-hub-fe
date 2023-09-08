import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  clear() {
    localStorage.clear()
  }

  constructor() { }
  get(key:LocalStorageKey){
    return localStorage.getItem(key)

  }

  set(key: LocalStorageKey, value: any) {
    localStorage.setItem(key, value);
  }
}

type LocalStorageKey = 'access_token'| 'username'
const sapl : LocalStorageKey = 'access_token'
