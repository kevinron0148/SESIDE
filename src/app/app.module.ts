import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/main/home/home.component';
import { HeaderMainComponent } from './components/main/header-main/header-main.component';
import { FooterMainComponent } from './components/main/footer-main/footer-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { HeaderPsychoComponent } from './components/psycho/header-psycho/header-psycho/header-psycho.component';
import { MainPsychoComponent } from './components/psycho/main-psycho/main-psycho/main-psycho.component';
import { HeaderPatientComponent } from './components/patient/header-patient/header-patient/header-patient.component';
import { MainPatientComponent } from './components/patient/main-patient/main-patient/main-patient.component';
import { ListarPacientesComponent } from './components/patient/list-patients/listar-pacientes/listar-pacientes.component';
import { ListarTestComponent } from './components/test/listar-test/listar-test.component';
import { TestActivosComponent } from './components/patient/test-activos/test-activos/test-activos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderAdminComponent,
    MainAdminComponent,
    HeaderPsychoComponent,
    MainPsychoComponent,
    HeaderPatientComponent,
    MainPatientComponent,
    ListarPacientesComponent,
    ListarTestComponent,
    TestActivosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
