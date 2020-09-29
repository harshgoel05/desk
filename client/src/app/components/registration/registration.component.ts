import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../../Authtools/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor( private fb: FormBuilder, private auth:AuthService) {
      this.registerForm = this.fb.group(
        {
          fName: [ '', [Validators.required]],
          lName: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
          conf_pass: ['', [Validators.required]],
          role: ['', [Validators.required]],
        },
        {
          validator: this.ConfirmedValidator('password', 'conf_pass'),
        }
      )
   }

  ngOnInit(): void {
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get f() {
    return this.registerForm;
  }
  register() {
    this.auth.register(this.registerForm.value)
      .subscribe(res => {
        console.log(res);
      },err => {
          console.log(err);
    })
  }

}
