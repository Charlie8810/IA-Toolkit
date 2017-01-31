import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Office }       from '../clases/';
import 'rxjs/Rx';
import { environment }     from '../../environments/environment';


@Injectable()
export class OfficeService {

  private headers = new Headers({'Accept': 'application/json, text/javascript, */*; q=0.01'});
  private options = new RequestOptions({ headers: this.headers }); 
  private serviceUrlBase:string;
  private serviceName:string;


  constructor (private http: Http) 
  {
    this.serviceUrlBase = environment.serviceUrlBase;
  }

  listOffices(): Observable<Office[]> 
  {
    this.serviceName = "list-offices";
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
