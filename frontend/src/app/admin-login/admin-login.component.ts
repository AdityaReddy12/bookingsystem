import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    adminid : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  constructor(private route : Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    var loginJson = JSON.stringify(this.form.value);
    const json1={
      "adminid": "Admin",
      "password": "Admin",
    }
    console.log(loginJson);
    if(loginJson===JSON.stringify(json1)){
      alert("Login successful");
      this.route.navigate(['/home']);
      }
      else{
        alert("Invalid Login"); 
      }
    }
  }