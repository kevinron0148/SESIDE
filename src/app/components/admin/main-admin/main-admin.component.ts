import { Component, OnInit } from '@angular/core';
import { Psychologist } from 'src/app/clases/psychologist';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  psycho = new Psychologist(0, '', '', '', 0);
  opcion = 3;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
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
