import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Student } from '../bookapp';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { StudentService } from '../bookapp.service';
import { patientlistComponent } from '../Patientlist/patientlist.component';
@Component({
  selector: 'app-addstudent',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export default class BookingComponent implements OnInit {
  student: Student = new Student();
  private baseUrl = 'http://localhost:9100/students';

  constructor(private httpClient: HttpClient, private studentService: StudentService, private router: Router) {}
  
  onSubmit() {
    console.log(this.student);
    (this.httpClient.post<any>(`${this.baseUrl}`,this.student).subscribe((data) => {
      alert('Success');
      this.router.navigate(['home']);
    },
    (error) => {
      console.log(this.student);
      alert('Failure')}));
    // this.studentService.registerUser(this.student).subscribe(
    //   (data) => {
    //     alert('Success');
    //     this.router.navigateByUrl('home');
    //   },
    //   (error) => {
    //     console.log(this.student);
    //     alert('Failure')}
    // );
  }

  ngOnInit(): void {}
}



