import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../models/solicitud.model';
import { HttpClient } from '@angular/common/http';
const base_url:String='http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
 
 

  constructor(private http:HttpClient) { }

  getAllSolicitudes():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${base_url}Solicitudes`)
  }

  getSolisById(solId:string):Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${base_url}Solicitudes/${solId}`)
  }
  deleteSoli(soliId:string):Observable<SolicitudModel>{
    return this.http.delete<SolicitudModel>(`${base_url}Solicitudes/${soliId}`)
  }
  
}
