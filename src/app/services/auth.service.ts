import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { signin, TypeLoginResponse, user, userUpdate } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private serviceSubject = new Subject<string>();

  signin(data:signin): Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.signin}`,data);
  }

  signup(data:user): Observable<user>{
    return this.http.post<user>(`${environment.signup}`,data);
  }
  getUsers(): Observable<user[]>{
    return this.http.get<user[]>(`${environment.user}`);
  }
  getUser(id: string): Observable<user>{
    return this.http.get<user>(`${environment.user}/${id}`);
  }
  removeUsers(id: string): Observable<user>{
    return this.http.delete<user>(`${environment.user}/${id}`);
  }
  updateUsers(id: string, data: userUpdate): Observable<user>{
    return this.http.put<user>(`${environment.user}/${id}`, data);
  }

  logOut(){
    localStorage.removeItem('user');
    this.serviceSubject.next('');
  }
}
