import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrar-solicitud',
  templateUrl: './borrar-solicitud.component.html',
  styleUrls: ['./borrar-solicitud.component.css']
})
export class BorrarSolicitudComponent implements OnInit {

  constructor(private solisService:SolicitudesService,private router:Router, private rout:ActivatedRoute) { }

  ngOnInit() { 
    this.deleteSolicitud();
   }

  deleteSolicitud():void{
    let id=this.rout.snapshot.params["id"];
    this.solisService.deleteSoli(id).subscribe(item=>{
      alert("borrado")
      this.router.navigate(['inmuebles/home-i'])
    })
  }
  


}
