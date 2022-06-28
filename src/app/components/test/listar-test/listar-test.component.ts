import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Depressive_disorder } from 'src/app/clases/depressive_disoder';
import { Diagnostic_report } from 'src/app/clases/diagnostic_report';
import { Patient } from 'src/app/clases/patient';
import { PatientCompuesto } from 'src/app/clases/patientCompuesto';
import { Psychologist } from 'src/app/clases/psychologist';
import { Test } from 'src/app/clases/test';
import { User } from 'src/app/clases/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listar-test',
  templateUrl: './listar-test.component.html',
  styleUrls: ['./listar-test.component.css'],
})
export class ListarTestComponent implements OnInit {
  tests: Test[] | undefined;
  desordenDepresivo = new Depressive_disorder(0, '', '', '', '');
  reportesDiagnostico: Diagnostic_report[] | undefined;
  reportesDiagnosticoCopy: Diagnostic_report[] | undefined;
  reporteDiagnostico = new Diagnostic_report(
    0,
    new Date() as unknown as string,
    0,
    0
  );
  user = new User(0, '', '', true, 0);
  psycho = new Psychologist(0, '', '', '', 0);
  paciente = new Patient(0, '', '', '', 0, '', '', '', '', 1, 0);
  test = new Test(
    0,
    new Date() as unknown as string,
    '',
    true,
    0,
    this.paciente,
    0,
    this.psycho
  );
  closeResult = '';
  mensajeModal: string | undefined;
  constructor(
    private modalService: NgbModal,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.listarTest().subscribe((data) => {
      this.tests = data;
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  seleccionarTest(test: Test) {
    this.test = test;
    console.log(this.test);
    this.userService
      .buscarPacienteById(this.test.patient_id as unknown as string)
      .subscribe((data) => {
        this.paciente = data;
      });
    console.log(this.paciente);

    this.userService
      .buscarPsicologoById(this.test.psychologist_id as unknown as string)
      .subscribe((data) => {
        this.psycho = data;
      });
    console.log(this.psycho);
  }

  verResultados(test: Test) {
    //reportesDiagnostico
    this.test = test;
    this.userService
      .listarDiagnosticosByTestId(test.id as unknown as string)
      .subscribe((data) => {
        this.reportesDiagnostico = data;
      });
  }

  verDesordenDepresivo(depressive_disorder_id: number) {
    //reportesDiagnostico
    this.userService
      .buscarDesordenDepresivoById(depressive_disorder_id as unknown as string)
      .subscribe((data) => {
        this.desordenDepresivo = data;
      });
  }
}
