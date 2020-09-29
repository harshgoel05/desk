import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Authtools/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService, private route:Router) {
      this.loginForm = this.fb.group(
        {
          email: ['',[Validators.required, Validators.email]],
          password: ['',[Validators.required]]
        }
      )
  }

  ngOnInit(): void {
  }
  role;
  get f(){
    return this.loginForm;
  }
  login() {
    this.auth.login(this.loginForm.value)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.auth.getUser()
          .subscribe(res1 => {
            this.role = res1.role;
            if(res1.role ===  'student')
            this.route.navigateByUrl('/lazy/studentdash');
          else {
            this.route.navigateByUrl('/teacherDashboard')
          }
        })



      }, err => {

    })
  }

}
