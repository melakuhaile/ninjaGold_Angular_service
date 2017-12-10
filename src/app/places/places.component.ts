import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  farm: number;

  ngOnInit() {
  }

  // coming from places.html (click)="gold_farm(...)
  gold_farm(sender:string, min, max){
    console.log ("in gold_farm", this.farm);
    this.farm = this._dataService.farmGold(sender, min, max);
  }

}