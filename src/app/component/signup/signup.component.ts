import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formVisible: boolean = true;
successMessage;
  id;
constructor(private _frombuilder:FormBuilder,private _service:ServiceService,private _router:Router)
{

}
registration=this._frombuilder.group(
  {
    email:[],
    password:[]
}
)
data()
{
  if(this.registration.valid) {
    console.log(this.registration.value)
    this._service.adduser(this.registration.value).subscribe
    (
      (response) => {
        this.successMessage = 'Signup Successful!';  // Update success message
        this.id=response  // Add user to table
        alert("success fully signup")
        this.registration.reset();  // Reset the form after successful signup
        // this.formVisible = false;
        this._router.navigate(['login']);
      },
    (error) => {
      console.error('Error:', error); // Log any error from the API call
      this.successMessage = 'There was an error during signup. Please try again later.'; // Handle API error
    }
  );
} else {
    this.successMessage = 'Please fill out the form correctly.';  // Handle invalid form submission
  }
}
}