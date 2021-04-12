import { Injectable } from '@angular/core';
import { InmuebleModel } from "../models/inmueble.model";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../models/solicitud.model';

const base_url:String='http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private http:HttpClient) { 

  }

  getAllHouses():Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${base_url}Inmuebles`)
  }
  
  getHouseById(houseId:string):Observable<InmuebleModel>{
    return this.http.get<InmuebleModel>(`${base_url}Inmuebles/${houseId}`)
  }


  saveNewHouse(house:InmuebleModel):Observable<InmuebleModel>{
    return this.http.post<InmuebleModel>(`${base_url}Inmuebles`,house,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }
  saveNewSolicitud(soli:SolicitudModel):Observable<SolicitudModel>{
    return this.http.post<SolicitudModel>(`${base_url}Solicitudes`,soli,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  } 
  
  updateNewHouse(house:InmuebleModel):Observable<InmuebleModel>{
    return this.http.put<InmuebleModel>(`${base_url}Inmuebles`,house,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }
  
  deleteHouse(inmuebleId:String):Observable<InmuebleModel>{
    return this.http.delete<InmuebleModel>(`${base_url}Inmuebles/${inmuebleId}`);
  }

}
