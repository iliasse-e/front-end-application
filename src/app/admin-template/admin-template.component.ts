import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/interface.user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor(private loginService: LoginService, private router : Router) { }

  user: User | undefined;

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  public handleLogout() {
    console.log("Deconnexion");
    this.loginService.logout().subscribe({
      next: (isDisconnected: boolean) => {
        if (isDisconnected) this.router.navigateByUrl("/login")
      },
      error: (err) => {
        console.log(err);
      }
      
    })
    console.log(this.loginService.isLogged());
    
  }

}
