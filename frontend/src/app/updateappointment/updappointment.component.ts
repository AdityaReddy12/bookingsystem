import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../bookapp';
import { StudentService } from '../bookapp.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updappointment.component.html',
  styleUrls: ['./updappointment.component.css'],
})
export class UpdateappointmentComponent implements OnInit {
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

  updateStudent() {
    this.studentService.updateStudent(this.studentId, this.student).subscribe(
      (data) => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateStudent();
  }

  gotoList() {
    this.router.navigate(['/studlist']);
  }
}
