import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  // tslint:disable-next-line:variable-name
  private _dataUrl = 'http://hpb.health.gov.lk/api/get-current-statistical';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this._dataUrl);
  }
}
