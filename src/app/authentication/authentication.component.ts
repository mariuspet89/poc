import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isDisabled: boolean = false;


  profileForm = new FormGroup({
    username: new FormControl(null, [Validators.minLength(5),
      Validators.maxLength(10),
      Validators.required]),
    password: new FormControl(null, [Validators.minLength(5),
      Validators.maxLength(10),
      Validators.required])
  });

  constructor(private authService: AuthenticationService, private route:Router) {
  }

  ngOnInit(): void {
  }

  get formControls() {
    return this.profileForm.controls
  }

  login() {
    if (!this.profileForm.valid) {
      return;
    }
    this.isDisabled = true;
    const val = this.profileForm.value;


    if (val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(
        responseData => {
          console.log(responseData);
          this.route.navigate(['list-page']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.isDisabled=false;
          this.profileForm.reset();
        }
      )
    }


  }
}
