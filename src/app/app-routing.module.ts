import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllquestionpageComponent } from './components/QApages/allquestionpage/allquestionpage.component';
import { QuestionpageComponent } from './components/QApages/questionpage/questionpage.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: NavbarComponent },
    { path: 'question', component: AllquestionpageComponent },
    { path: 'ques:id', component: QuestionpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
