import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Resource }       from '../clases/resource'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourcesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers }); 
  private ResourcesUrl = 'http://localhost:9090/api/manta/resources';
  constructor (private http: Http) {}

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getResources(): Promise<Resource[]> {
    return this.http.get(this.ResourcesUrl, {headers: this.headers})
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }  
}
