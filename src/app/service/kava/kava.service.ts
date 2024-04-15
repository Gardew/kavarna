import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KavaService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/obrazky/latte.jpg',
      '/assets/obrazky/presso.jpg',
      '/assets/obrazky/cappuccino.jpg',
      
    ]
  }
}
