import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryProduct, status } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(environment.category)
  }
  createCategory (data: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.category}`,data)
  }
  getCategory (_id: string | undefined, limit: number | undefined | null): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(`${environment.category}/${_id}${limit != null ? `?limit=${limit}&` : ''}`)
  }
  getCategory1 (_id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.category}/detail/${_id}`)
  }
  removeCategory (_id: string | undefined): Observable<Category> {
    return this.http.delete<Category>(`${environment.category}/${_id}`)
  }
  updateCategory (_id: string | undefined, data: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.category}/${_id}`, data)
  }
  //status

  getStatus (): Observable<status[]> {
    return this.http.get<status[]>(environment.status)
  }
}
