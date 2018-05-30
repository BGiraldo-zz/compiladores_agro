import { duenho } from './../../administration/model/duenho.model';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaduenho:duenho
  constructor(private loginservice:LoginService,private router:Router) { }
  
  ngOnInit() {
  }
  
  login(user:string,pass:string){
    this.loginservice.login(user,pass).subscribe();
    this.loginservice.getList().subscribe(result=>console.log(result));
    this.router.navigate(['/administration']);
  }
  
  registrarEsp(documento1,nombre1,genero1,edad1,user1,pass1){
    let ss:any = {
      documento: documento1,
      nombre: nombre1,
      genero: genero1,
      edad: edad1,
      user: user1,
      pass: pass1,
    }
    this.loginservice.regEsp(ss).subscribe(res=>console.log(res));
  }
  
  registrarDuenho(documento1,nombre1,genero1,edad1,user1,pass1){
    let ss:any = {
      documento: documento1,
      nombre: nombre1,
      genero: genero1,
      edad: edad1,
      user: user1,
      pass: pass1,
      terrenos:[]
    }
    this.loginservice.regEsp(ss).subscribe(res=>console.log(res));

  }
  
  
  
}
