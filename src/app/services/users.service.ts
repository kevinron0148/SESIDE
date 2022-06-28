import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  buscarUsuario(username: String, password: String): Observable<any> {
    return this.http.get(
      `${this.url}/findUserByCredenciales/${username}/${password}`
    );
  }

  buscarPacienteById(patient_id: String): Observable<any> {
    return this.http.get(`${this.url}/patient/${patient_id}`);
  }

  buscarPsicologoById(psychologist_id: String): Observable<any> {
    return this.http.get(`${this.url}/psychologist/${psychologist_id}`);
  }

  buscarPsychoByUserId(user_id: String): Observable<any> {
    return this.http.get(`${this.url}/psychologistByUser_id/${user_id}`);
  }

  buscarDesordenDepresivoById(id: String): Observable<any> {
    return this.http.get(`${this.url}/depressive_disorder/${id}`);
  }

  listarPacientes(): Observable<any> {
    return this.http.get(`${this.url}/patients`);
  }

  listarDiagnosticosByTestId(test_id: string): Observable<any> {
    return this.http.get(`${this.url}/diagnostic_reportsByTest/${test_id}`);
  }

  agregarUser(User: any): Observable<any> {
    return this.http.post(`${this.url}/user`, JSON.stringify(User), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  agregarPaciente(Paciente: any): Observable<any> {
    return this.http.post(`${this.url}/patient`, JSON.stringify(Paciente), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  agregarTest_paciente(Test: any): Observable<any> {
    return this.http.post(`${this.url}/test`, JSON.stringify(Test), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  listarTest(): Observable<any> {
    return this.http.get(`${this.url}/tests`);
  }

  listarTestActivos(patient_id: String): Observable<any> {
    return this.http.get(`${this.url}/testsActiveByUser/${patient_id}`);
  }

  buscarPatientByUserId(user_id: String): Observable<any> {
    return this.http.get(`${this.url}/patientByUser_id/${user_id}`);
  }
}
