import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionResponse } from 'src/app/model/askquestion';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit{
 questionAsked:QuestionResponse;

  AskQuestion: FormGroup
  ngOnInit(): void {
    this.AskQuestion = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      tag: new FormControl(null, Validators.required)
    })
  }
  

  constructor(private question:QuestionsService , private route:Router, private isacive: ActivatedRoute){}

  onSubmit(){
    // console.log(this.AskQuestion.value)
    this.question.askQuestion(this.AskQuestion.value).subscribe((res)=>{
      console.log(res)
      this.question.responsedData = res

     
    
    })
    this.route.navigate(['questions'])  
    
  }
 

}
