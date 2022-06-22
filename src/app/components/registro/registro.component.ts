import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  nombre = '';
  apellidos = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  registrar() {
    if (this.nombre != '' && this.apellidos != '') {
      Swal.fire({
        icon: 'success',
        title: 'Registrado Correctamente',
        showConfirmButton: false,
        timer: 2500,
      });
      this.router.navigate(['/main'])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        showConfirmButton: false,
        timer: 2500,
      });
      this.ngOnInit();
    }
  }
}
