import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  data: any;
  continentName!: any;
  continentSelected: any;
  constructor(private _s: SharedService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._s.getContinentsCasesData().subscribe((data: any) => {
      //console.log(data);
      this.data = data;
    });
  }

  setContinent() {
    this.continentSelected = this.data.filter((d: any)=> d.continent === this.continentName)[0];
    //console.log(this.continentSelected);
  }

}
