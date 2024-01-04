import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    // Ajustez ceci si nécessaire
    this.loginMethod();
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
