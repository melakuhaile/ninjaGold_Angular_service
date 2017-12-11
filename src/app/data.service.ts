import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  rand: number;
  sum: number = 0;
  sender: String = "";
  messages: String[] = [];

  constructor() { }

  Gold(name:string, min, max){
    
    this.rand = Math.floor(Math.random() * (max-min+1) + min); 
    
    this.sum += this.rand;
    this.displayMessage(name, this.rand);
    return this.rand;
  }

  displayMessage(name:string, num:number){

    if(num<0){
      this.messages.push("You lost " + num + " gold at the " + name);
    }else{
      this.messages.push("You earned " + num + " gold at the " + name);
    }
  }
}
