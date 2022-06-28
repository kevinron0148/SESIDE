import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/clases/patient';
import { Psychologist } from 'src/app/clases/psychologist';
import { Test } from 'src/app/clases/test';
import { User } from 'src/app/clases/user';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
})
export class ListarPacientesComponent implements OnInit {
  pacientes: Patient[] | undefined;
  user = new User(0, '', '', true, 0);
  psycho = new Psychologist(0, '', '', '', 0);
  paciente = new Patient(0, '', '', '', 0, '', '', '', '', 1, 0);
  test = new Test(
    0,
    new Date() as unknown as string,
    'Ninguna',
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
    this.userService.listarPacientes().subscribe((data) => {
      this.pacientes = data;
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

  agregarPaciente() {
    this.user.role_id = 2;
    this.user.username = this.user.username.toLowerCase();
    this.userService.agregarUser(this.user).subscribe(
      (res) => {
        if (res != null) {
          this.paciente.user_id = res.id;
          this.userService.agregarPaciente(this.paciente).subscribe(
            (rpta) => {
              if (rpta != null) {
                Swal.fire({
                  icon: 'success',
                  title: 'Paciente Registrado Correctamente',
                  showConfirmButton: false,
                  timer: 2500,
                });
                window.location.reload();
              }
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Error al Registrar Paciente',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          );
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al Registrar Usuario',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  cambiarEstadoCuenta() {}

  seleccionarPaciente(paciente: Patient) {
    this.paciente = paciente;
    console.log(this.paciente);
  }

  agregarTest_Paciente() {
    this.test.date = new Date() as unknown as string;
    this.test.patient_id = this.paciente.id;
    this.test.psychologist_id = localStorage.getItem(
      'psychologist_id'
    ) as unknown as number;
    this.userService.agregarTest_paciente(this.test).subscribe(
      (res) => {
        if (res != null) {
          Swal.fire({
            icon: 'success',
            title: 'Test Añadido Correctamente',
            showConfirmButton: false,
            timer: 2500,
          });
          window.location.reload();
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al Añadir Test al Usuario',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
