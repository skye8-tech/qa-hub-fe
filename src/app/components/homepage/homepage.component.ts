import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  dealsSection:Array<services> =[
    {heading1:'Monthly', heading2:'1k/', firsttext:'+ Get answers to all questions', secondtext:'+ Have access to all solutions ', thirdtext:'+ Be the first to get new features', buttext:'Start 1 month free trial'},
    {heading1:'2 Months', heading2:'2k/', firsttext:'+ Get answers to all questions', secondtext:'+ Have access to all solutions ', thirdtext:'+ Be the first to get new features', buttext:'Start 2 month free trial'},
    {heading1:'Yearly', heading2:'10k/', firsttext:'+ Get answers to all questions', secondtext:'+ Have access to all solutions ', thirdtext:'+ Be the first to get new features', buttext:'Start 1 Year free trial'}

  ]

}
interface services {
  heading1:string;
  heading2:string;
  firsttext:string;
  secondtext:string;
  thirdtext:string;
  buttext:string;
}
