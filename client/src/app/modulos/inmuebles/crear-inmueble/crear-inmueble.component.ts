import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { ThrowStmt } from '@angular/compiler';
import { InmuebleModel } from 'src/app/models/inmueble.model';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  constructor(private route:Router,private inmService:InmueblesService) {

    this.nuevoInmuebleGroup=this.formGroupInmuebleCreator();
    }
  /*idasesor: string = '';
  tipo: string = '';
  estado: string = '';
  dir: string = '';
  estrato: string = '';
  dept: string = '';
  city: string = '';
  categ: string = '';
  image: string = "";
  */
  nuevoInmuebleGroup: FormGroup;
 

  ngOnInit() {
    this.nuevoInmuebleGroup= this.formGroupInmuebleCreator();
  }

  formGroupInmuebleCreator(): FormGroup {
    return new FormGroup({
      idasesor: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      dir: new FormControl('', [Validators.required]),
      estrato: new FormControl('', [Validators.required]),
      dept: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      categ: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  get idasesor(){
    return this.nuevoInmuebleGroup.get('idasesor');
  }
  get tipo(){
    return this.nuevoInmuebleGroup.get('tipo');
  }
  get estado(){
    return this.nuevoInmuebleGroup.get('estado');
  }
  get dir(){
    return this.nuevoInmuebleGroup.get('dir');
  }
  get estrato(){
    return this.nuevoInmuebleGroup.get('estrato');
  }
  get dept(){
    return this.nuevoInmuebleGroup.get('dept');
  }
  get city(){
    return this.nuevoInmuebleGroup.get('city');
  }
  get categ(){
    return this.nuevoInmuebleGroup.get('categ');
  }
  get image(){
    return this.nuevoInmuebleGroup.get('image');
  }

  saveNewInmueble():void{
    if(this.nuevoInmuebleGroup.valid){
      let inmueble = this.buildInmuebleData();
      this.inmService.saveNewHouse(inmueble).subscribe(item=>{
        alert("Creado Satisfactoriamente");
        this.route.navigate(["inmuebles/home-i"])
      });
      console.log("saved");
    }else{
      alert("Format Invalid");
    }
  }

  buildInmuebleData():InmuebleModel{
    let inmueble : InmuebleModel={
      IDasesor:this.idasesor.value,
      Tipo: this.tipo.value,
      Estado:this.estado.value,
      Direccion: this.dir.value,
      Estrato: this.estrato.value,
      Departamento: this.dept.value,
      Ciudad: this.city.value,
      Categoria: this.categ.value,
      LinkImage: this.image.value
    }
    return inmueble;
  }


}
