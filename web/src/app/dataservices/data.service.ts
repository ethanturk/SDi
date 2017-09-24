import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

class Item {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gpa: string;
}

@Injectable()
export class DataService {
    apiRoot: string = 'http://localhost:4576/api/Data';

    constructor(private httpClient: Http) {
    }

    get(): Observable<Response> {
        return this.httpClient.get(this.apiRoot);
    }

    insert(model: Item): Observable<Response> {
      return this.httpClient.post(this.apiRoot, model);
    }
}
