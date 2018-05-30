import { LoginService } from './general/services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatExpansionModule,
  DateAdapter,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatChipsModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './general/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatTabsModule,
    AppRoutingModule,
    MatChipsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
