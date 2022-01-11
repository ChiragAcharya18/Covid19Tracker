import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-countires',
  templateUrl: './countires.component.html',
  styleUrls: ['./countires.component.css']
})
export class CountiresComponent implements OnInit {

  countriesList!: any;
  countryDropDown: any[] = [];
  countryName: any;
  countrySelected: any;

  constructor(private _s: SharedService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._s.getCountriesCasesData().subscribe((data: any) => {
      this.countriesList = data;
      this.getCountriesList();
      //console.log(data);
    }); 
  }

  setCountry() {
    this.countrySelected = this.countriesList.filter((d: any)=> d.country === this.countryName)[0];
    //console.log(this.countrySelected);
  }

  getCountriesList() {
    this.countriesList.forEach((country: any) => {
      //console.log(country);
      
        var temp = {
          name: country["country"],
          flag: country["countryInfo"]["flag"]
        }
        this.countryDropDown.push(temp);
      });
      //console.log(this.countryDropDown);
  }

}
