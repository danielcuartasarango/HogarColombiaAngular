import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  constructor(private solisService:SolicitudesService) { 

  }

  listaSolicitudes:SolicitudModel[]=[];

  ngOnInit() {
    this.getAllSolicitudes();
  }
  getAllSolicitudes():void{
    this.solisService.getAllSolicitudes().subscribe(items=>{
      this.listaSolicitudes=items;

    })

  }

}
