import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent {
  questiondetails:Array<any>=[];

  onClick(){
    
  }
  constructor(private allquestable: QuestionsService){

  }
  ngOnInit(): void {
    this.questiondetails = this.allquestable.allQuestion;
  }

}
