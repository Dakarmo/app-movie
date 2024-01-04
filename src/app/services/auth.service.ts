import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(name: string, paword: string){
    if(name === 'dakarmo' && paword === "123456"){
      return 200;
    }else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login']);
  }
}
