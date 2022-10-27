import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl = 'http://localhost:4041/api/';

  constructor(private http:HttpClient) { }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-student', student);
  }
  
  LoginStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'login', student);
  }

  TestSelect(sendta:object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'result', sendta);
  }

  GetAll(): Observable<object>{
    return this.http.get(`${this.baseUrl}`+'getall');
  }
  Get(sendata:object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'get-results',sendata);
  }
}                                           