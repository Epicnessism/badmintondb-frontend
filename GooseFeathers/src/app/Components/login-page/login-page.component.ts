import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule, ValidationErrors,
  Validators
} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ErrorStateMatcher} from "@angular/material/core";
import {AuthService} from "../../Services/auth.service";
import {MatButton} from "@angular/material/button";
import {LoginRequest} from "../../interfaces/LoginRequest";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  username: FormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(6), this.userNameValidation], nonNullable: true})
  password: FormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(8)], nonNullable: true})
  public loginForm: FormGroup = new FormGroup({})
  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public ngOnInit() {
    this.loginForm.addControl("username", this.username)
    this.loginForm.addControl("password", this.password)
  }

  onSubmit(): void {
    console.log(this.loginForm.value)
    let payload: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authService.userLogin(payload).subscribe(data => {
      console.log(data)
      sessionStorage.setItem("activeUserId", data.userId)
      this.router.navigateByUrl("")
    })
  }



  userNameValidation(control: AbstractControl): ValidationErrors | null {
    let errorMap: ValidationErrors | null = null
    if(control.value.toString().includes("bob")) {
      errorMap = {usernameIncludesForbidden: true}
    }
    return errorMap;
  }
}
