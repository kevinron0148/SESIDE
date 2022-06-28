import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/clases/patient';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-patient',
  templateUrl: './main-patient.component.html',
  styleUrls: ['./main-patient.component.css'],
})
export class MainPatientComponent implements OnInit {
  paciente = new Patient(0, '', '', '', 0, '', '', '', '', 1, 0);
  opcion = 0;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
      .buscarPatientByUserId(
        localStorage.getItem('user_id') as unknown as string
      )
      .subscribe((res) => {
        this.paciente = res;
        localStorage.setItem(
          'patient_id',
          this.paciente.id as unknown as string
        );
      });
  }

  opcion1() {
    this.opcion = 1;
  }
  opcion2() {
    this.opcion = 2;
  }

  opcion3() {
    this.opcion = 3;
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }
}
