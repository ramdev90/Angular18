import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/employees/' + id);
  }

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }

  postEmployees(body: object): Observable<any> {
    return this.http.post('http://localhost:3000/employees', body);
  }

  putEmployees(id: string, body: object): Observable<any> {
    return this.http.put('http://localhost:3000/employees/' + id, body);
  }

  deleteEmployees(id: string) {
    return this.http.delete('http://localhost:3000/employees/' + id);
  }
}
