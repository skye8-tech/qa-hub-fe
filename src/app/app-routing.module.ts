import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllquestionpageComponent } from './components/QApages/allquestionpage/allquestionpage.component';
import { QuestionpageComponent } from './components/QApages/questionpage/questionpage.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { LoginComponent } from './components/info/login/login.component';
import { ContainerComponent } from './components/container/container.component';
import { RegistrationComponent } from './components/info/registration/registration.component';
import { AboutpageComponent } from './components/homepage/aboutpage/aboutpage.component';
import { ServiceComponent } from './components/homepage/service/service.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AskquestionComponent } from './components/QApages/askquestion/askquestion.component';
import { QApagesComponent } from './components/qapages/qapages.component';


const routes: Routes = [
    { path: '', component: ContainerComponent },
   { path: 'question', component: QApagesComponent, 
       children: [ 
         { path: 'questions', component: AllquestionpageComponent},        
         { path: 'questions/:id', component: QuestionpageComponent},
         { path: 'ask', component: AskquestionComponent},
        { path: 'answer', component: QuestionpageComponent},
       ]
   },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent},
    
    
   
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
