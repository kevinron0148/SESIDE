import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pregunta_base } from 'src/app/clases/pregunta_base';
import { Rptas } from 'src/app/clases/rptas';
import { Test } from 'src/app/clases/test';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-run-test',
  templateUrl: './run-test.component.html',
  styleUrls: ['./run-test.component.css'],
})
export class RunTestComponent implements OnInit {
  opcion = 0;
  test = new Test(0, new Date() as unknown as String, '', true, 0, 0);
  rptas = new Rptas(
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    'otro',
    localStorage.getItem('test_id') as unknown as number
  );
  preguntas_base: Pregunta_base[] | undefined;

  constructor(
    private modalService: NgbModal,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.listarPreguntasBase().subscribe((data) => {
      this.preguntas_base = data;
    });
    this.userService
      .buscarTestById(localStorage.getItem('test_id') as string)
      .subscribe((data) => {
        this.test = data;
      });
  }

  opcion1() {
    this.opcion = 1;
  }

  registrarRespuestaSi(pregunta_base: Pregunta_base) {
    switch (pregunta_base.id) {
      case 1:
        this.rptas.rpt1 = 'si';
        break;
      case 2:
        this.rptas.rpt2 = 'si';
        break;
      case 3:
        this.rptas.rpt3 = 'si';
        break;
      case 4:
        this.rptas.rpt4 = 'si';
        break;
      case 5:
        this.rptas.rpt5 = 'si';
        break;
      case 6:
        this.rptas.rpt6 = 'si';
        break;
      case 7:
        this.rptas.rpt7 = 'si';
        break;
      case 8:
        this.rptas.rpt8 = 'si';
        break;
      case 9:
        this.rptas.rpt9 = 'si';
        break;
      case 10:
        this.rptas.rpt10 = 'si';
        break;
      case 11:
        this.rptas.rpt11 = 'si';
        break;
      case 12:
        this.rptas.rpt12 = 'si';
        break;
      case 13:
        this.rptas.rpt13 = 'si';
        break;
      case 14:
        this.rptas.rpt14 = 'si';
        break;
      case 15:
        this.rptas.rpt15 = 'si';
        break;
      case 16:
        this.rptas.rpt16 = 'si';
        break;
      case 17:
        this.rptas.rpt17 = 'si';
        break;
      case 18:
        this.rptas.rpt18 = 'si';
        break;
      case 19:
        this.rptas.rpt19 = 'si';
        break;
      case 20:
        this.rptas.rpt20 = 'si';
        break;
      case 21:
        this.rptas.rpt21 = 'si';
        break;
      case 22:
        this.rptas.rpt22 = 'si';
        break;
      case 23:
        this.rptas.rpt23 = 'si';
        break;
      case 24:
        this.rptas.rpt24 = 'si';
        break;
      case 25:
        this.rptas.rpt25 = 'si';
        break;
      case 26:
        this.rptas.rpt26 = 'si';
        break;
      case 27:
        this.rptas.rpt27 = 'si';
        break;
      case 28:
        this.rptas.rpt28 = 'si';
        break;
      case 29:
        this.rptas.rpt29 = 'si';
        break;
      case 30:
        this.rptas.rpt30 = 'si';
        break;
      case 31:
        this.rptas.rpt31 = 'si';
        break;
      case 32:
        this.rptas.rpt32 = 'si';
        break;
      case 33:
        this.rptas.rpt33 = 'si';
        break;
      case 34:
        this.rptas.rpt34 = 'si';
        break;
      case 35:
        this.rptas.rpt35 = 'si';
        break;
      case 36:
        this.rptas.rpt36 = 'si';
        break;
      case 37:
        this.rptas.rpt37 = 'si';
        break;
      default:
        break;
    }
    console.log(this.rptas);
  }
  registrarRespuestaNo(pregunta_base: Pregunta_base) {
    switch (pregunta_base.id) {
      case 1:
        this.rptas.rpt1 = 'no';
        break;
      case 2:
        this.rptas.rpt2 = 'no';
        break;
      case 3:
        this.rptas.rpt3 = 'no';
        break;
      case 4:
        this.rptas.rpt4 = 'no';
        break;
      case 5:
        this.rptas.rpt5 = 'no';
        break;
      case 6:
        this.rptas.rpt6 = 'no';
        break;
      case 7:
        this.rptas.rpt7 = 'no';
        break;
      case 8:
        this.rptas.rpt8 = 'no';
        break;
      case 9:
        this.rptas.rpt9 = 'no';
        break;
      case 10:
        this.rptas.rpt10 = 'no';
        break;
      case 11:
        this.rptas.rpt11 = 'no';
        break;
      case 12:
        this.rptas.rpt12 = 'no';
        break;
      case 13:
        this.rptas.rpt13 = 'no';
        break;
      case 14:
        this.rptas.rpt14 = 'no';
        break;
      case 15:
        this.rptas.rpt15 = 'no';
        break;
      case 16:
        this.rptas.rpt16 = 'no';
        break;
      case 17:
        this.rptas.rpt17 = 'no';
        break;
      case 18:
        this.rptas.rpt18 = 'no';
        break;
      case 19:
        this.rptas.rpt19 = 'no';
        break;
      case 20:
        this.rptas.rpt20 = 'no';
        break;
      case 21:
        this.rptas.rpt21 = 'no';
        break;
      case 22:
        this.rptas.rpt22 = 'no';
        break;
      case 23:
        this.rptas.rpt23 = 'no';
        break;
      case 24:
        this.rptas.rpt24 = 'no';
        break;
      case 25:
        this.rptas.rpt25 = 'no';
        break;
      case 26:
        this.rptas.rpt26 = 'no';
        break;
      case 27:
        this.rptas.rpt27 = 'no';
        break;
      case 28:
        this.rptas.rpt28 = 'no';
        break;
      case 29:
        this.rptas.rpt29 = 'no';
        break;
      case 30:
        this.rptas.rpt30 = 'no';
        break;
      case 31:
        this.rptas.rpt31 = 'no';
        break;
      case 32:
        this.rptas.rpt32 = 'no';
        break;
      case 33:
        this.rptas.rpt33 = 'no';
        break;
      case 34:
        this.rptas.rpt34 = 'no';
        break;
      case 35:
        this.rptas.rpt35 = 'no';
        break;
      case 36:
        this.rptas.rpt36 = 'no';
        break;
      case 37:
        this.rptas.rpt37 = 'no';
        break;
      default:
        break;
    }
    console.log(this.rptas);
  }

  runTest() {
    console.log(this.rptas);
    this.userService.runTest(this.rptas).subscribe(
      (res) => {
        if (res === null) {
          this.test.is_active = false;
          this.userService.cambiarEstadoTest(this.test).subscribe((res) => {
            if (res != null) {
              Swal.fire({
                icon: 'success',
                title: 'Respuestas Registradas Correctamente',
                showConfirmButton: false,
                timer: 2500,
              });
              this.router.navigate(['/patient']);
            }
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al Enviar',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
