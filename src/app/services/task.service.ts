import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://json-server-task-app.onrender.com/tasks';
  constructor(private http: HttpClient) {}

  // getTasks():Task[]{
  //   return TASKS;
  // }
  // getTasks():Observable<Task[]>{
  // const tasks = of(TASKS);
  // return tasks;
  // }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskRemider(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }
  
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
