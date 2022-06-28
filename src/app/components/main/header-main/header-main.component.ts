import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/clases/user';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css'],
})
export class HeaderMainComponent implements OnInit {
  closeResult = '';
  mensajeModal: string | undefined;
  user = new User(0, '', '', true, 0);
  constructor(
    private modalService: NgbModal,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  buscarUsuario(username: String, password: String) {
    console.log(this.user);
    this.userService.buscarUsuario(username, password).subscribe(
      (res) => {
        this.user = res;
        console.log(this.user);
        if (res != null) {
          if (this.user.is_active) {
            this.modalService.dismissAll();
            switch (res.role_id) {
              case 1:
                this.router.navigate(['/admin']);
                break;
              case 2:
                this.router.navigate(['/psycho']);
                break;
              case 3:
                this.router.navigate(['/patient']);
                break;
              default:
                break;
            }
            localStorage.setItem(
              'rol_id',
              this.user.role_id as unknown as string
            );
            localStorage.setItem('user_id', res.id as string);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error - USUARIO INACTIVO',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error en las credenciales',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error - CONSUMO DE API',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
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
}
