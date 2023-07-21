import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(private formBuilder : FormBuilder, 
              private authService : AuthService) {
    this.signUpForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\d)(?=.*[!@#$%&*?])[a-zA-Z\d!@#$%&*?]{8,}$/)]],
      confirmPassword : ['', Validators.required]
    }, { validators : this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup : FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch : true};
  }

  registerUser() {
    const user = {
      name: this.signUpForm.get('name')?.value, 
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    };
      this.authService.signUP(user)
        // this.http.post<tokenInterface>('http://localhost:3000/user/signup', user).subscribe({
        //   next: ((response) => {
        //     this.router.navigate(['/']);
        //     localStorage.setItem("token", JSON.stringify(response.token));
        //     console.log(response.token);
        //   }), error: ((error)=>{
        //     alert('Invalid Details, registration rejected'+error);
        //     this.signUpForm.reset()
        //   })
        // })
    //   next: (response) => {
    //   this.router.navigate(['/']);
    //   localStorage.setItem("token", JSON.stringify(response["token"]));
    //   console.log(response);
    // }, (error) => {
    //   alert('Invalid Details, registration rejected');
    //   this.signUpForm.reset()
    // }
  }

  //getter functions for accessing form controls
  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

}
