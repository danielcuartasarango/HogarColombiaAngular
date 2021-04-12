import { Component, OnInit } from '@angular/core';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  constructor(private inmuebleService:InmueblesService, private route:ActivatedRoute) { }
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

  ngOnInit() {
    this.getDetallesInmueble();
  }

  getDetallesInmueble():void{
    let id=this.route.snapshot.params["id"];
    this.inmuebleService.getHouseById(id).subscribe(item => {
      this.inmueble=item;
      
    });

  }

}
