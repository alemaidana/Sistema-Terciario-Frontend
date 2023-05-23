import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  formGroup:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private _userService:UserService,
    private _errorService:ErrorService,
    private router:Router
  )
  {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logIn()
  {
    const user:User = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password,
    }

    this._userService.login(user).subscribe({
      next: (token:string) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);},
      error: (event:HttpErrorResponse) => {
         this._errorService.errorMessage(event);
      }
    })
  }


}
