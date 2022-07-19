import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email], this.userValidator),
    password: new FormControl('', Validators.required, this.passwordValidator),
  });

  public get email() {
    return this.form.get('email')
  }

  public get password() {
    return this.form.get('password')
  }

  public get isSubmit() {
    return this.isSubmitted
  }

  public get userIsExisting() {
    return this.userExists
  }

  public get userEmail() {
    return this.user
  }

  private isSubmitted: boolean = false;

  private userExists: boolean = false;

  private user!: string;

  constructor() { }
  
  ngOnInit(): void {
  }

  userValidator(formControl: AbstractControl): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (USERS.find((user) => user.email === formControl.value)) {
          resolve(null)
          this.user = formControl.value
        }
        else resolve({"errorMsg": ERROR_MSG.userIsInvalid})
      }, 3000)

    })
    return promise
  }

  passwordValidator(formControl: AbstractControl): Promise<errorPassword> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value === USERS[findIndex(USERS[this.userEmail])].password) resolve(null);
        else resolve({"errorMsg": ERROR_MSG.passwordIsInvalid})
      }, 2000)

    })
    return promise
  }

  handleSubmit() {
    this.isSubmitted = true;
    console.log(this.form);
    setTimeout(() => {
      if (this.form.valid) {
        alert("Vous êtes authentifié")
        this.form.reset()
      }
      else {
        console.log(this.isSubmit, this.password?.errors, this.email?.errors)
      }
      }, 3000)
  }

}


interface errorPassword {
  errorMsg: string
}

const USER_ONE: {email: string, password: string} = {
  email: "ema@gmail.com",
  password: "mama"
}

const USER_TWO: {email: string, password: string} = {
  email: "abc@gmail.com",
  password: "momo"
}

const USERS: Array<{email: string, password: string}> = [
  USER_ONE, USER_TWO
]

const ERROR_MSG: any = {
  passwordIsInvalid: "Le mot de passe est invalide",
  userIsInvalid: "L'utilisateur n'existe pas"
}
