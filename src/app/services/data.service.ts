import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
    apiUrl: string = 'http://course.loc/link/';
    constructor(private http: HttpClient) {

    }

    public getData() {
        return this.http.get(this.apiUrl);
    }

}
