import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  url:string='https://reqres.in/api/login'

constructor(private httpClient: HttpClient) { }

  /**
   * API to validate user credentials
   * @param username ShortID of the Daimler user
   * @param password Password of the user
   */
  authenticate(username: string, password: string) {
    return this.httpClient.post<any>(this.url,
      { email: username, password: password })
      .pipe((data => {
        return data;
      }));
  }
}