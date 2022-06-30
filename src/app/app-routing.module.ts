import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { HomeComponent } from './components/main/home/home.component';
import { ListarPacientesComponent } from './components/patient/list-patients/listar-pacientes/listar-pacientes.component';
import { MainPatientComponent } from './components/patient/main-patient/main-patient/main-patient.component';
import { MainPsychoComponent } from './components/psycho/main-psycho/main-psycho/main-psycho.component';
import { ListarTestComponent } from './components/test/listar-test/listar-test.component';
import { RunTestComponent } from './components/test/run-test/run-test/run-test.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: MainAdminComponent, canActivate: [LoginGuard]
  },
  {
    path: 'psycho',
    component: MainPsychoComponent, canActivate: [LoginGuard]
  },
  {
    path: 'patient',
    component: MainPatientComponent, canActivate: [LoginGuard]
  },
  {
    path: 'run-test',
    component: RunTestComponent, canActivate: [LoginGuard]
  },
  /*{
    path: 'test',
    component: ListarTestComponent, canActivate: [LoginGuard]
  },
  {
    path: 'pacientes',
    component: ListarPacientesComponent, canActivate: [LoginGuard]
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
