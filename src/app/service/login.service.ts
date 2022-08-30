import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import * as UUID from "uuid";
import { Role } from '../enum/role';
import { User } from '../model/interface.user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = new Array();
  loggedUser: User | undefined;

  constructor() {
    this.users.push({
      id: UUID.v4(),
      username: "user1",
      password: "0000",
      roles: [Role.USER]
    });
    this.users.push({
      id: UUID.v4(),
      username: "user2",
      password: "0000",
      roles: [Role.USER]
    });
    this.users.push({
      id: UUID.v4(),
      username: "admin1",
      password: "0000",
      roles: [Role.USER, Role.ADMIN]
    });
   }

   // login request
   public login(username: string, password: string): Observable<User> {
    const currentUser = this.users.find(user => user.username == username);
    if (!currentUser) return throwError(() => new Error("User not found"));
    if (currentUser.password !== password) return throwError(() => new Error("Wrong password"));
    return of(currentUser);
   }

   // Logs user in
   public logUser(user: User): Observable<boolean> {
    this.loggedUser = user;
    localStorage.setItem("loggedUser", JSON.stringify({
      username: this.loggedUser.username,
      roles: this.loggedUser.roles,
      jwt: "JWT_TOKEN"
    }));
    return of(true);
   }

   // Logs user out
   public logout(): Observable<boolean> {
      this.loggedUser = undefined;
      localStorage.removeItem("loggedUser");
      return of(true);
   }

   public hasRole (role: Role): boolean {
      return this.loggedUser!.roles.includes(role);
   }

   public isLogged(): boolean {
    return this.loggedUser!==undefined;
   }

   public getUser(): User {
    return this.loggedUser!;
   }
}
