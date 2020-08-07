import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneService {

  port = 5000;
  constructor(private httpClient: HttpClient) { }

  getAll = (): Promise<any> => {
    return this.httpClient.get(`http://localhost:${this.port}/api/personPhone`).toPromise();
  }

  remove = (id: number): Promise<any> => {
    return this.httpClient.delete(`http://localhost:${this.port}/api/personPhone/${id}`).toPromise();
  }

  edit = (model: any): Promise<any> => {
    return this.httpClient.put(`http://localhost:${this.port}/api/personPhone`, model).toPromise();
  }

  insert = (model: any): Promise<any> => {
    return this.httpClient.post(`http://localhost:${this.port}/api/personPhone`, model).toPromise();
  }
}
