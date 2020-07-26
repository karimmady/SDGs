import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PsProfileComponent } from './private-sector/ps-profile/ps-profile.component';
import { PsNavBarComponent } from './private-sector/ps-nav-bar/ps-nav-bar.component';
import { ProjectsHomeComponent } from './projects/home-page/projects-home/projects-home.component';
import { NgoNavBarComponent } from './ngo/ngo-nav-bar/ngo-nav-bar.component';
import { NgoProfileComponent } from './ngo/ngo-profile/ngo-profile.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { ChartsModule } from 'ng2-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { FilterPipe } from './pipe/filter.pipe';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PsProfileComponent,
    PsNavBarComponent,
    ProjectsHomeComponent,
    NgoNavBarComponent,
    NgoProfileComponent,
    ProjectDetailsComponent,
    AdminHomeComponent,
    AdminNavBarComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    GoogleChartsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
