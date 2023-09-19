import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Student } from './bookapp';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:9100/students';

  constructor(private httpClient: HttpClient) {}

  registerUser(student: Student): Observable<Object> {
    console.log(student);
    return this.httpClient.post(`${this.baseUrl}`, student);
  }

  getUser(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteStudent(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
    });
  }
  getStudent(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: string, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
}
