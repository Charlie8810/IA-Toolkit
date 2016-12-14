import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Resource }       from '../clases/resource'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ResourcesService {

  private headers = new Headers({'Accept': 'application/json, text/javascript, */*; q=0.01'});
  private options = new RequestOptions({ headers: this.headers }); 
  private ResourcesUrl = 'http://localhost:9090/api/manta/resources';
  constructor (private http: Http) {}

  private extractData(res: Response) {
    let body = res.json();
    //console.log(body);
    return body || {};
  }

  getResources(): Observable<Resource[]> {
    return this.http.get(this.ResourcesUrl, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  
}
