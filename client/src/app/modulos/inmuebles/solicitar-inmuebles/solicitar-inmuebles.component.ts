import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/solicitud.model';

@Component({
  selector: 'app-solicitar-inmuebles',
  templateUrl: './solicitar-inmuebles.component.html',
  styleUrls: ['./solicitar-inmuebles.component.css']
})


export class SolicitarInmuebleComponent implements OnInit {
  fecha: Date = new Date();

  constructor(private user: UsuariosService, private inmuebleService:InmueblesService,
    private route:ActivatedRoute,private routerl:Router) {

   }
  userEmail:string;
  userName:string;
  userRol:string;
  userId:string;
  inmueble: InmuebleModel={
    Categoria:null,
    Ciudad:null,
    Departamento:null,
    Direccion:null,
    Estado:null,
    IDasesor:null,
    Estrato:null,
    LinkImage:null,
    Tipo:null,
    //id:null
  }
   solicitudNueva:FormGroup;

  ngOnInit() {
    this.solicitudNueva=this.newSolicitudGruopCreator();
    this.getDetallesInmueble();
    this.userInfo();
  }
  newSolicitudGruopCreator():FormGroup{
    return new FormGroup({
      comentarios:new FormControl('',[Validators.required])
    })
  }
  get comentarios(){
    return this.solicitudNueva.get('comentarios');

  }
  
  
  
  userInfo():void{
    let uInfo = JSON.parse(this.user.getUserInformation());
    if(isNullOrUndefined(uInfo)){
      alert("no hay nadie logueado")
     
    } else{
      this.userEmail=uInfo.email;
      this.userRol=uInfo.rol;
      this.userId=uInfo.id;
      this.userName=uInfo.name;
    }
  }

  getDetallesInmueble():void{
    let id=this.route.snapshot.params["id"];
    
    this.inmuebleService.getHouseById(id).subscribe(item => {
      this.inmueble=item;
    });
  }
  

  saveNewSolicitud():void{
    
    if(this.solicitudNueva.valid){
      let soli = this.buildSolicitudesData();
      this.inmuebleService.saveNewSolicitud(soli).subscribe(item=>{
        alert("Creado Satisfactoriamente");
        this.routerl.navigate(["inmuebles/home-i"])
      });
      console.log("saved");
    }else{
      alert("Format Invalid");
    }
  }

  
  buildSolicitudesData():SolicitudModel{
    console.log(this.inmueble.Estado)
    let soli :SolicitudModel={
      
     
      Comentarios:this.comentarios.value,
      Contrato:"largo plazo",
      Estado:this.inmueble.Estado,
      Fecha: this.fecha,
      Foto:this.inmueble.LinkImage,
      IDinmueble:this.route.snapshot.params["id"],
      IDusuario:this.userId,
      IDvendedor:this.inmueble.IDasesor,
      TipoInmueble:this.inmueble.Tipo,
      Tipo:"nueva",  
      listadoSolicitudes:["2"],
      IDsolicitud:"nueva2",
      email:this.userEmail
  
    }
    return soli;

  }
}
