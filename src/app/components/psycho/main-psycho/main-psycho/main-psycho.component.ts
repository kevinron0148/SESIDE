import { Component, OnInit } from '@angular/core';
import { Psychologist } from 'src/app/clases/psychologist';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-psycho',
  templateUrl: './main-psycho.component.html',
  styleUrls: ['./main-psycho.component.css'],
})
export class MainPsychoComponent implements OnInit {
  psycho = new Psychologist(0, '', '', '', 0);
  opcion = 0;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
      .buscarPsychoByUserId(
        localStorage.getItem('user_id') as unknown as string
      )
      .subscribe((res) => {
        this.psycho = res;
        localStorage.setItem(
          'psychologist_id',
          this.psycho.id as unknown as string
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
