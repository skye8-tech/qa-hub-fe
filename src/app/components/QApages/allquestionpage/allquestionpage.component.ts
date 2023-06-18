import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-allquestionpage',
  templateUrl: './allquestionpage.component.html',
  styleUrls: ['./allquestionpage.component.css']
})
export class AllquestionpageComponent implements OnInit {
  questiondetails:Array<any>=[];
  userId:any;
  user:any;
  constructor(private allquestable: QuestionsService, private route: Router, private isActive:ActivatedRoute,){

  }
  ngOnInit(): void {
    this.questiondetails = this.allquestable.allQuestion;

    

  }
  onClick(){
    this.route.navigate(['ques'])
      this.user = this.isActive.snapshot.params['id'];
      this.user = this.allquestable.allQuestion.find((a) => a.id ==this.userId)

  }
  


}
