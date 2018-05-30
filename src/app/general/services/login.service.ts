import { terreno } from './../../administration/model/terreno.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { duenho } from '../../administration/model/duenho.model';
@Injectable()
export class LoginService {
urlLogin:string ="http://localhost:8080/duenho-login";
urlTerrenos:string ="http://localhost:8080/duenho-terrenos";
header = new HttpHeaders({ 'Content-Type': 'application/json' });

private adminCacheList: duenho[]=[];


  constructor(private httpClient:HttpClient) { }
 
  login(user:string, password:string): Observable<{}> {
    this.adminCacheList =[]
    let body = {
      "user":user,
      "pass":password
    }
    return this.httpClient.post(this.urlLogin, JSON.stringify(body), { headers: this.header }).map(res=>res).do((data: duenho) => {
      this.adminCacheList.push(data) });
  }

  getList(): Observable<{}> {
    var admin = this.adminCacheList;
    return Observable.of(admin);
  }

  setlist(list:duenho[]){
    this.adminCacheList=list;
    console.log('lista actualizada');
  }

  addterreno(list:duenho){
    let body=
      {
        "duenhoId":list._id,
        "terrenos": list.terrenos
      }
    
    return this.httpClient.post(this.urlTerrenos, JSON.stringify(body), { headers: this.header });
  }

  regDuenho(data){
    return this.httpClient.post('http://localhost:8080/duenhos', JSON.stringify(data), { headers: this.header });
  }
  regEsp(data){
    return this.httpClient.post('http://localhost:8080/duenhos', JSON.stringify(data), { headers: this.header });
  }

  
}
