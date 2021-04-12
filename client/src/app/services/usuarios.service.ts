import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { UsersModule } from '../modulos/users/users.module';

const base_url = "http://localhost:3000/api/ExtUsers/"
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  tokeId: string = '';
  token: string = '';
  flag: boolean = true;

  constructor(private http: HttpClient) {

    this.token = this.getToken();
   }

  loginUser(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}login?include=user`, {
      email: email,
      password: password
    }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${base_url}?access_token=${this.token}`);
  }

  userRegister(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}`, user , {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  getUserById(id: string): Observable<UserModel>{
    return this.http.get<UserModel>(`${base_url}/${id}`);
  }

  deleteUser(id: string): Observable<UserModel>{
    return this.http.delete<UserModel>(`${base_url}${id}`);
  }

  updateUser(usuario: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${base_url}`, usuario, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
  
  logoutUser() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
  }

  saveToken(token) {
    localStorage.setItem("userToken", token);
  }

  getToken() {
    return localStorage.getItem("userToken");
  }

  saveUserInformation(user: UserModel) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  getUserInformation() {
    let userInfo = localStorage.getItem('userInfo');
    if (isNullOrUndefined(userInfo)) {
      return null

    } else {
      return userInfo;
    }

  }

  resetPassword(email: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}reset`, 
    {email: email}, 
    {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }


  findUserEmail(email: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${base_url}findOne?filter=`, {
      headers: new HttpHeaders({
        "filter": `{"where":{"email":${email}}}`
      })
    });
  }

}
