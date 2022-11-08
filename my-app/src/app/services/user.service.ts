import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  EMPLOYEE_DATA_URL = 'https://jsonplaceholder.typicode.com/todos/5';

  constructor(private http:HttpClient) { }

  GetEmployeeData(){
    return this.http.get(this.EMPLOYEE_DATA_URL);
  }
}
