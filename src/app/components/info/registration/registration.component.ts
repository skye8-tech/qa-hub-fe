import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  UserData: FormGroup;

  ngOnInit(): void {
    this.UserData = new FormGroup({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmpassword: new FormControl(null, Validators.required),
    })

  }
  constructor(private quesservices: QuestionsService, private route: Router) { }

  onSubmit() {
    this.quesservices.saveData(this.UserData.value).subscribe((res)=>{
      console.log(res)
    
    })
    this.route.navigate(['question'])
    
  }
}
