import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _formbuil:FormBuilder,private _login:ServiceService,private router:Router)
  {
  
  }
  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
  SRegExp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/";
  registerForm1= this._formbuil.group({
    email: ['',[Validators.required,Validators.pattern(this.pattern)]],
    password: ['',[Validators.required, Validators.pattern(this.SRegExp)]],
  
  });
  
  alert1:string
  alert2:string
    showSuccessAlert1 :boolean
    showSuccessAlert2 :boolean
    

    onSubmit()
    {
      const email = this.registerForm1.value.email;
  const password = Number(this.registerForm1.value.password); // Convert password to a number

  this._login.login(email, password).subscribe(
    (res) => {
      if (res) {
        this.alert1 = 'Login successful!';
        this.showSuccessAlert1 = true;
        setTimeout(() => {
          this.router.navigateByUrl("/navigation");
          localStorage.setItem('login', JSON.stringify(email));
        }, 2000);
      }
    },
    (error) => {
      this.showSuccessAlert2 = true;
      this.alert2 = 'User does not exist';
      setTimeout(() => {
        this.router.navigateByUrl("/signup");
      }, 2000);
    }
  );
}
}
