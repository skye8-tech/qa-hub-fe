import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/model/login.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
    
  }
  constructor(private authentication: AuthenticationService, private fb: FormBuilder, private localstorage:LocalstorageService) {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
   }


  onSubmit() {
    console.log(this.form.value)
    const request : LoginRequest = {
      username:this.form.get('username')?.value,
      password:this.form.get('password')?.value
    }
    this.authentication.login(request).subscribe();

  }
}
