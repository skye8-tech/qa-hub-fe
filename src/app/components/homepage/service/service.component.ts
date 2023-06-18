import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

serviceInfo: Array<any> =[
  {imgUrl: '../../../../assets/purpleicon.png', desc: 'Ask a question and <br> get answers from <br> expert in a very <br>small time interval'},
  {imgUrl: '../../../../assets/greenicon.png', desc: 'Ask a question and <br>get answers from<br> expert in a very <br>small time interval'},
  {imgUrl: '../../../../assets/blueicon.png', desc: 'Ask a question and <br>get answers from <br>expert in a very <br>small time interval'}
 ] 


}
interface services {
  imgUrl:string;
  desc:string;
}
