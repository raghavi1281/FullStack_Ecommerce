import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder, 
              private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*?])[a-zA-Z\d!@#$%&*?]{8,}$/)]],
    });
  }

  loginUser(){
    const user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
      this.authService.logIN(user)
    // this.http.post('http://localhost:3000/user/login', user).subscribe((response) => {
    //   this.router.navigate(['/']);
    //   localStorage.setItem("token", JSON.stringify(response));
    //   console.log(JSON.stringify(response));
    // })
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
