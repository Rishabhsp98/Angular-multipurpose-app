import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultService {
  multiply(num1: number,num2: number){
    return num1 * num2;
  }
  constructor() { }
}
