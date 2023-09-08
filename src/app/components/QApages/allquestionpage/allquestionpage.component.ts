import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionResponse } from 'src/app/model/askquestion';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-allquestionpage',
  templateUrl: './allquestionpage.component.html',
  styleUrls: ['./allquestionpage.component.css']
})
export class AllquestionpageComponent implements OnInit {
  questiondetails:Array<QuestionResponse>=[];
  userId:any;
  user:any;

  constructor(
    private _allqustionService: QuestionsService, 
    private route: Router,
    private _activatedRoute:ActivatedRoute,
    ){

  }
  ngOnInit(): void {
    this._allqustionService.getAllQuestions().subscribe((res)=>{
      console.log(res)
      this.questiondetails = res
    });

  }

  onSubmit(){
    this.route.navigate(['questions'])

  }
  onClick(id: number){
    this.route.navigate([`/question/questions/${id}`])
      // this.user = this.isActive.snapshot.params['id'];
      // this.user = this.allquestable.allQuestion.find((a) => a.id ==this.userId)

  }
  


}
