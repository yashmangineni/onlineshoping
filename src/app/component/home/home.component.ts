import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router:Router)
{

}
navigateToLogin(): void {
  this.router.navigateByUrl('/login'); // Redirect to Login Page
}

navigateToSignup(): void {
  this.router.navigateByUrl('/signup'); // Redirect to Signup Page
}
}
