import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { User, UsuarioBase }       from '../clases';
import { environment }     from '../../environments/environment';


@Injectable()
export class UsersService {


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
  

  ListUsers(): Observable<User[]> 
  {
    this.serviceName = "users-list";
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  InsertUser(b:UsuarioBase): Observable<User> 
  {
      this.serviceName = "add-user";
      console.log(this.headers);
      return this.http.post(this.serviceUrlBase + this.serviceName, JSON.stringify(b),{headers: this.headers})
        .map((res:Response) =>{
            console.log(res);
            b.usuario;
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
