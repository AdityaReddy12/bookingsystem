import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../bookapp';
import { StudentService } from '../bookapp.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css'],
})
export class patientdetailsComponent implements OnInit {
  studentId!: string;
  student!: Student;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.student = new Student();

    this.studentId = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.studentId).subscribe(
      (data) => {
        console.log(data);
        this.student = data;
      },
      (error) => console.log(error)
    );
  }
  list() {
    this.router.navigate(['studlist']);
  }
}
