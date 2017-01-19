import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { User }       from '../clases/user';
import { UsuarioBase }       from '../clases/usuario-base';


@Injectable()
export class UsersService {


  private headers = new Headers({ 'Accept': 'application/json, text/javascript, */*; q=0.01',
                                  'content-type':'application/json'});
  private options = new RequestOptions({ headers: this.headers }); 
  private serviceUrlBase = 'http://localhost:9090/api/manta/';
  private serviceName:string;

  constructor (private http: Http) {}
  

  ListUsers(): Observable<User[]> 
  {
    this.serviceName = "users-list";
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  InsertUser(b:UsuarioBase): void
  {
    //console.log(JSON.stringify(b));
    this.serviceName = "add-user";
    this.http.post(this.serviceUrlBase + this.serviceName, JSON.stringify(b),{headers: this.headers});

    console.log("pasamos / " + this.serviceName);
  }


}
