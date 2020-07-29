import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
const ip = environment.backend;
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }

  addAdmin(admin): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiIsImlkIjo1LCJ0eXBlIjoiQWRtaW4iLCJleHAiOjE1OTYwNDczNjYsImlhdCI6MTU5NjAyOTM2NiwiZW1haWwiOiJrYXJpbUBkZWxsLmNvbSJ9.zdOha-0fKzB4KGG0K8uOg3gma6qZQEmnDsIEYf6Tejr13PRVjZE4hTKHSCMdqcoZEBkPnElXJUQPNWEKJhETzQ");
    return this.http.post(`${ip}/admin/addAdmin`, admin, { headers: headers })
  }

  getAdmins(): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiIsImlkIjo1LCJ0eXBlIjoiQWRtaW4iLCJleHAiOjE1OTYwNDczNjYsImlhdCI6MTU5NjAyOTM2NiwiZW1haWwiOiJrYXJpbUBkZWxsLmNvbSJ9.zdOha-0fKzB4KGG0K8uOg3gma6qZQEmnDsIEYf6Tejr13PRVjZE4hTKHSCMdqcoZEBkPnElXJUQPNWEKJhETzQ");
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      this.http.get(`${ip}/admin/getAdmins`, { headers: headers }).toPromise().then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }
}
