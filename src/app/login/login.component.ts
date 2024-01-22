import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string ="";
  password: string ="";
  errorMsg: string ="";
  hidePassword: boolean = false;

  constructor(private auth: AuthService, private router: Router){}

/***
 * Cette méthode est appelée une fois,
 * après que le composant a été initialisé.
 ***/
  ngOnInit(): void {
    this.loginMethod();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is required";
    }else if(this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }else {
      this.errorMsg ="";
      let res = this.auth.login(this.username, this.password)
        if(res === 200){
          this.router.navigate(['home'])
        }
        if (res === 403){
          this.errorMsg ="Invalid Credential";
        }
    }
  }
  loginMethod() {
    let login = document.getElementById('login');
    let loginImage = document.getElementById('loginImage');

    if (login && loginImage) {
      login.style.transform = "scale(0)";
      loginImage.style.transform = "scale(.1)";

      setTimeout(() => {
        if (loginImage) {
          loginImage.style.transition = "2s";
          loginImage.style.transform = "scale(1)";
        }
        setTimeout(() => {
          if (login) {
            login.style.transition = "2s";
            login.style.transform = "scale(1)";
          }
        }, 1000);
      },100);
    }
  }
}
