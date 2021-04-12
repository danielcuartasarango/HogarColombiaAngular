import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailModel } from '../models/email.model'
import { Observable } from 'rxjs';

const base_url: string= 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  sendMail(email: EmailModel): Observable<EmailModel> {
    return this.http.post<EmailModel>(`${base_url}Categorias/sendEmail?`, email, {
      headers: new HttpHeaders({
        "content-type": "application/json"
    })
  });
}

}
