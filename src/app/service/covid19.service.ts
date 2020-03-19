import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  // tslint:disable-next-line:variable-name
  private _dataUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this._dataUrl);
  }
}
