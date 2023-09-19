import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../bookapp';
import { StudentService } from '../bookapp.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css'],
})
export class patientlistComponent implements OnInit {
  Student!: Observable<Student[]>;
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.Student = this.studentService.getUser();
  }
  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  bookingDetails(id: string) {
    console.log(id);
    this.router.navigate(['details', id]);
  }
  updateBooking(id: string) {
    console.log(id);
    this.router.navigate(['update', id]);
  }
}
