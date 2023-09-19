import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BookingComponent from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { patientdetailsComponent } from './patientdetails/patientdetails.component';
import { patientlistComponent } from './Patientlist/patientlist.component';
import { UpdateappointmentComponent } from './updateappointment/updappointment.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: UserLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'newstud',
    component: BookingComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'home/studlist',
    component: patientlistComponent,
  },
  {
    path: 'studlist',
    component: patientlistComponent,
  },
  {
    path: 'details/:id',
    component: patientdetailsComponent,
  },
  {
    path: 'update/:id',
    component: UpdateappointmentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'admin', component:AdminLoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}