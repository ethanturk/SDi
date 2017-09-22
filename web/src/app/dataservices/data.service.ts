import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

interface Item {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gpa: string;
}

@Injectable()
export class DataService {
    apiRoot: string = 'http://localhost:4576/api/Data';
    results: any;
    loading: boolean;

    constructor(private http: Http) {
        this.results = [];
        this.loading = false;
    }

    get(): Promise<Item[]> {
        return this.http.get(this.apiRoot)
            .toPromise()
            .then(r => r.json() as Item[])
            .catch(this.handleError);
    }

    insert(model: Item): Promise<Response> {
        return this.http.post(this.apiRoot, model).toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
