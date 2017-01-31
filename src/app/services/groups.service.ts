import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Group, GrupoBase }       from '../clases/';
import { Observable }     from 'rxjs/Observable';
import { environment }     from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class GroupsService {

  private headers = new Headers();
  //private options = new RequestOptions({ headers: this.headers }); 
  private serviceUrlBase:string;
  private serviceName:string;
 
  constructor (private http: Http) 
  {
      this.headers.append('Accept','application/json, text/javascript, */*; q=0.01');
      this.headers.append('content-type','application/json');
      this.serviceUrlBase = environment.serviceUrlBase;
  }

  listGroups(): Observable<Group[]> 
  {
    this.serviceName = "list-groups";
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  listBaseGroups(): Observable<GrupoBase[]>
  {
      this.serviceName = "list-base-groups";
      return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  InsertGroup(b:GrupoBase): Observable<GrupoBase> 
  {
      this.serviceName = "add-group";
      return this.http.post(this.serviceUrlBase + this.serviceName, JSON.stringify(b),{headers: this.headers})
        .map((res:Response) =>{ b; })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    


}
