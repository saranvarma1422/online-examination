import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:4041/api/admin/';

  constructor(private http:HttpClient) { }

  createExam(exam: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-exam', exam);
  }
  
  getAllExams(): Observable<object> {
    return this.http.get(`${this.baseUrl}`+'all-exams');
  }

  addQuestion(question:object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'add-question', question);
  }

  deleteQuestion(question:object,examId:number): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'delete-question?examId='+examId,question);
  }
  deleteExam(exam:object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'delete-exam',exam);
  }
  updateExam(exam:object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'update-Exam',exam);
  }
}
