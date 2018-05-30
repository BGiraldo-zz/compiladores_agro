import { postulado } from './model/postulado.model';
import { terreno } from './model/terreno.model';
import { duenho } from './model/duenho.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../general/services/login.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
listaduenho:duenho[]=null;
  constructor(private login:LoginService) {
   
   }

  ngOnInit() {
    this.login.getList().subscribe((result:duenho[])=>{
      this.listaduenho = result
    });
  }
addterreno(nombre1:string,extension1:number,productos1:string){

  let tereno:terreno = {
    nombre:nombre1,
    extension:extension1,
    productos:[productos1],
    postulados:[]
  };
  this.listaduenho[0].terrenos.push(tereno);
  this.login.addterreno(this.listaduenho[0]).subscribe(result=>console.log(result));

}



}
