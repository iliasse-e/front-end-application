import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../model/interface.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  user: User | undefined;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      user: this.formBuilder.control(null),
      password: this.formBuilder.control(null)
    })
  }

  public handleLogin(username: string, password: string): void {
    this.loginService.login(username, password).subscribe({
      next: (user: User) => {
        this.user = user;
        this.loginService.logUser(user).subscribe({
          next: () => {
            this.router.navigateByUrl("/admin");
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }

}
