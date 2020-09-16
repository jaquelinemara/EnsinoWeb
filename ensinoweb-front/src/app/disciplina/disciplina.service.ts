import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private baseUrl = 'http://localhost:8090/disciplinas';

  constructor(private http: HttpClient) { }

  getDisciplina(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDisciplina(Disciplina: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Disciplina);
  }

  updateDisciplina(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDisciplina(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDisciplinasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
