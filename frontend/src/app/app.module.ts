import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import BookingComponent from './booking/booking.component';
import { patientlistComponent } from './Patientlist/patientlist.component';
import { patientdetailsComponent } from './patientdetails/patientdetails.component';
import { UpdateappointmentComponent } from './updateappointment/updappointment.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
@NgModule({
  declarations: [AppComponent, UserLoginComponent, HomeComponent, RegisterComponent, HeaderComponent, BookingComponent, patientlistComponent, patientdetailsComponent, UpdateappointmentComponent, FooterComponent, AboutComponent, AdminLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}