import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }


  getContinentsCasesData(): Observable<any[]> {
    return this.http.get<any[]>("https://corona.lmao.ninja/v2/continents?yesterday=true&sort");
  }

  getCountriesCasesData(): Observable<any[]> {
    return this.http.get<any[]>("https://corona.lmao.ninja/v2/countries?yesterday&sort");
  }

  getIndianStatesCasesData(): Observable<any[]> {
    return this.http.get<any[]>("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true");
  }
}
