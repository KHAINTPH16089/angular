import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, createProduct, Count } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //khai báo để có đối tượng tương tác với các phương thức api
  constructor(private http:HttpClient) { }

  getProducts (search: string|null, price: number,limit: number, sort: string|null, page: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.product}?${search != null ? `search=${search}&` : ''}price=${price}&perPage=${limit}${sort != null ? `&sortBy=${sort}` : ''}&page=${page}`)
  }
  getCount (): Observable<number> {
    return this.http.get<number>(`${environment.product}/count`)
  }
  getProduct (_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.product}/${_id}`)
  }
  removeProduct (_id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.product}/${_id}`)
  }
  createProduct (data: createProduct): Observable<Product> {
    return this.http.post<Product>(`${environment.product}`, data)
  }
  updateProduct (data: createProduct,_id: string | undefined ): Observable<Product> {
    return this.http.put<Product>(`${environment.product}/${_id}`, data)
  }
  uploadFileProduct (file: any){
    return fetch("http://localhost:3001/api/upload",{
      method: "POST",
      body: JSON.stringify({data: file}),
      headers:{ "Content-type": "application/json"}
    })
  }

  removeFile (_id: string): Observable<any> {
    return this.http.get<any>(`${environment.upload}/${_id}`)
  }
}
