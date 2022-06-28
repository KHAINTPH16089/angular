import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { order, orderDetail, updateOrder } from '../types/checkOut';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor(private http:HttpClient) { }

  createOrder (data: order): Observable<order>{
    return this.http.post<order>(`${environment.order}`, data)
  }

  createOrderDetail (data: orderDetail): Observable<orderDetail>{
    return this.http.post<orderDetail>(`${environment.orderDetail}`, data)
  }

  getAllOrder (): Observable<order[]>{
    return this.http.get<order[]>(`${environment.order}`)
  }

  getOrderDetail (_id: string): Observable<orderDetail[]>{
    return this.http.get<orderDetail[]>(`${environment.order}/${_id}`)
  }

  removeDetail (_id: string): Observable<order>{
    return this.http.delete<order>(`${environment.order}/${_id}`)
  }

  updateOrder (_id: string, data: updateOrder): Observable<order>{
    return this.http.put<order>(`${environment.order}/${_id}`, data)
  }
}
