import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { AboutpageComponent } from './components/homepage/aboutpage/aboutpage.component';
import { ServiceComponent } from './components/homepage/service/service.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { RegistrationComponent } from './components/info/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/info/login/login.component';
import { AllquestionpageComponent } from './components/QApages/allquestionpage/allquestionpage.component';
import { QuestionpageComponent } from './components/QApages/questionpage/questionpage.component';
import { AskquestionComponent } from './components/QApages/askquestion/askquestion.component';
import { SidebarComponent } from './components/QApages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    AboutpageComponent,
    ServiceComponent,
    HomepageComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    AllquestionpageComponent,
    QuestionpageComponent,
    AskquestionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
