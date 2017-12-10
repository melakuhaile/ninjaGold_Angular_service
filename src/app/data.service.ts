import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  ninjaGold: number[] = [];
  rand: number;
  sum: number = 0;
  sender: String = "";
  messages: String[] = [];

  constructor() { }

  farmGold(sender:string, min, max){
    console.log("min and max", min, max)
    console.log("in farmGold - data.service");
    this.rand = Math.floor(Math.random()*max)+(min); // 1-5
    this.ninjaGold.push(this.rand);
    console.log("random ", this.rand)
    this.sum += this.rand;
    console.log("sum ", this.sum);
    this.displayMessage(sender, this.rand);
    return this.rand;
  }

  displayMessage(sender:string, gold:number){
    if(gold<0){
      this.messages.push("You've lose " + gold + " gold at the " + sender);
    }else{
      this.messages.push("You've earned " + gold + " gold at the " + sender);
    }
  }
}
