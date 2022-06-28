import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/clases/patient';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header-patient',
  templateUrl: './header-patient.component.html',
  styleUrls: ['./header-patient.component.css'],
})
export class HeaderPatientComponent implements OnInit {
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
          'patent_id',
          this.paciente.id as unknown as string
        );
      });
  }
}
