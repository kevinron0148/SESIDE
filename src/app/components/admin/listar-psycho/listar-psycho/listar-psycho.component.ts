import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Psychologist } from 'src/app/clases/psychologist';
import { User } from 'src/app/clases/user';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-psycho',
  templateUrl: './listar-psycho.component.html',
  styleUrls: ['./listar-psycho.component.css'],
})
export class ListarPsychoComponent implements OnInit {
  psicologos: Psychologist[] | undefined;
  user = new User(0, '', '', true, 0);
  psycho = new Psychologist(0, '', '', '', 0);
  closeResult = '';
  mensajeModal: string | undefined;
  constructor(
    private modalService: NgbModal,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.listarPsicologos().subscribe((data) => {
      this.psicologos = data;
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

  agregarPsicologo() {
    this.user.role_id = 2;
    this.user.username = this.user.username.toLowerCase();
    this.userService.agregarUser(this.user).subscribe(
      (res) => {
        if (res != null) {
          this.psycho.user_id = res.id;
          this.userService.agregarPsicologo(this.psycho).subscribe(
            (rpta) => {
              if (rpta != null) {
                Swal.fire({
                  icon: 'success',
                  title: 'Psicologo Registrado Correctamente',
                  showConfirmButton: false,
                  timer: 2500,
                });
                window.location.reload();
              }
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Error al Registrar Psicologo',
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

  seleccionarPsicologo(paciente: Psychologist) {
    //this.paciente = paciente;
    //console.log(this.paciente);
  }
}
