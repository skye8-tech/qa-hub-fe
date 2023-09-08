import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionResponse } from 'src/app/model/askquestion';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent {
  questiondetails:QuestionResponse;
  answerdetails:QuestionResponse[];
  questionId!: number

  yes:boolean=false
  onClick(){
    this.yes=true
    
  }
  constructor(
    private _questionService: QuestionsService,
    private _actiatedRoute: ActivatedRoute,
  ){

  }
  ngOnInit(): void {
   
    this.getId();
    if (this.questionId) {
      this._questionService.getQuestionById(this.questionId).subscribe({
        next: res => {
          console.log(res)
          this.questiondetails = res;
        }
      
      })
    }
    this._questionService.getAllAnswersByQuetionId(this.questionId).subscribe({
      next: res => {
        console.log(res)
        this.answerdetails = res
      }
    })
  }

  getId() {
    this.questionId = this._actiatedRoute.snapshot.params['id'];
  }

  onSubmit(){
    
  }

}
