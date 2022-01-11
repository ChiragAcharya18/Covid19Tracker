import { SpinnerService } from './../spinner/spinner.service';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-states',
  templateUrl: './indian-states.component.html',
  styleUrls: ['./indian-states.component.css']
})
export class IndianStatesComponent implements OnInit {

  data: any;
  stateName: any;
  stateSelected: any;
  constructor(private _s: SharedService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._s.getIndianStatesCasesData().subscribe((data: any) => {
      this.data = data;
      //console.log(data);
    });
  }

  setState() {
    this.spinner.requestStarted();
    this.stateSelected = this.data.regionData.filter((d: any)=> d.region === this.stateName)[0];
    //console.log(this.stateSelected);
    this.spinner.requestEnded();
  }

}
