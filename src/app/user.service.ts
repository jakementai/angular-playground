import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configUrl = 'assets/config.json';

  constructor(
    private http: HttpClient
    ) { }


    getUserList(){
      return this.http.get(this.configUrl);
    }

}
