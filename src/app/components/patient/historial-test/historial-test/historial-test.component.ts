import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/clases/patient';
import { Psychologist } from 'src/app/clases/psychologist';
import { Test } from 'src/app/clases/test';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-historial-test',
  templateUrl: './historial-test.component.html',
  styleUrls: ['./historial-test.component.css'],
})
export class HistorialTestComponent implements OnInit {
  tests: Test[] | undefined;
  paciente = new Patient(0, '', '', '', 0, '', '', '', '', 1, 0);
  closeResult = '';
  fecha = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate();
  mensajeModal: string | undefined;
  psycho = new Psychologist(0, '', '', '', 0);
  test = new Test(0, new Date() as unknown as string, '', true, 0, 0);
  constructor(
    private modalService: NgbModal,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .listarTestInactivos(localStorage.getItem('patient_id') as string)
      .subscribe((data) => {
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
      .buscarPsicologoById(this.test.psychologist_id as unknown as string)
      .subscribe((data) => {
        this.psycho = data;
      });
    console.log(this.psycho);
  }
}
