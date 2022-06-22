import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTestComponent } from './components/main-test/main-test.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/main/home/home.component';
import { HeaderMainComponent } from './components/main/header-main/header-main.component';
import { FooterMainComponent } from './components/main/footer-main/footer-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    MainTestComponent,
    RegistroComponent,
    HomeComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderAdminComponent,
    MainAdminComponent,
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
