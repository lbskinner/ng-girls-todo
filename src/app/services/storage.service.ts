import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // get the data (object, list, etc.) stored int he service under the given key
  getData(key: string): any {
    // local storage stores data as key-valued pairs, and the values are stored as string
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  constructor() {}
}
