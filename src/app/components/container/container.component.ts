import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{

  constructor(private activaterRoute: ActivatedRoute){

  }
   ngOnInit(): void {
     this.activaterRoute.fragment.subscribe((val)=>{
      console.log(val)
      this.jumpTo(val)
     })
   }
   jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
   };
}
