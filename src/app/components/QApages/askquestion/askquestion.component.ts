import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit{
  AskQuestion: FormGroup
  ngOnInit(): void {
    this.AskQuestion = new FormGroup({
      title: new FormControl(null, Validators.required),
      detail: new FormControl(null, Validators.required),
      tagss: new FormControl(null, Validators.required)
    })
  }
  onSubmit(){
    console.log(this.AskQuestion.value)
  }
 

}
