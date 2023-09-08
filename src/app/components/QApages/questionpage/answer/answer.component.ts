import { Component, Input } from '@angular/core';
import { QuestionResponse } from 'src/app/model/askquestion';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  @Input() answer!: QuestionResponse
  
  yes: any;
  onClick() {
  
  }
}
