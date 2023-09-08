import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url = environment.apiUrl + "/api/auth"
  constructor(private http: HttpClient) { }
  

  saveData=(data: any) =>{
    //console.log(data)
    return this.http.post(this.url +"/register", data)
  }
  

 
  allQuestion: Array<allQuestions> = [
    {
      id: 1,
      name: 'Anne',
      question: 'Following the publishing of results for this semester and a sharp increase in payment transactions, some payment providers may take longer to confirm the status of your a transaction. If for any reason your transaction is not reflected on the UBaStudent platform upon completion',
      time: 'Wed 14 jun 13:50',
      title: 'Set up locale for date-fns and Next.js app directory'
    },
    {
      id: 2,
      name: 'Anias',
      question: 'Following the publishing of results for this semester and a sharp increase in payment transactions, some payment providers may take longer to confirm the status of your a transaction. If for any reason your transaction is not reflected on the UBaStudent platform upon completion',
      time: 'Tues 13 jun 13:50',
      title: 'Set up locale for date-fns and Next.js app directory'
    }
  ]

}
interface allQuestions {
  id: number,
  name: string,
  question: string,
  time: string,
  title: string
}