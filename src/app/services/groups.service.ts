import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Group }       from '../clases/group'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GroupsService {

  private headers = new Headers({'Accept': 'application/json, text/javascript, */*; q=0.01'});
  private options = new RequestOptions({ headers: this.headers }); 
  private serviceUrlBase = 'http://localhost:9090/api/manta/';
  private serviceName:string;
 
  constructor (private http: Http) {}

  listGroups(): Observable<Group[]> 
  {
    this.serviceName = "list-groups";
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
