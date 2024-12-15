import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getItemById(itemId: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }
private url="http://localhost:8080/insert";
private url1="http://localhost:8080/authen/";
private url2="http://localhost:8080/selecting"

public adduser(data):Observable<any>
{
  return this._http.post(this.url,data);
}
public login(email: any, password: any): Observable<string> {
  return this._http.get(this.url1+email+"/"+password,{responseType:'text'});
 }
public select():Observable<any>
{
  return this._http.get(this.url2);
}
}
