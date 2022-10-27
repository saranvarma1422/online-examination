import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { TestComponent } from './test/test.component';
import { FinishComponent } from './finish/finish.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { AddExamComponent } from './updateexam/add-exam/add-exam.component';
import { AddQuestionComponent } from './updateexam/add-question/add-question.component';
import { UpdateExamComponent } from './updateexam/update-exam/update-exam.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    LoginComponent,
    ExamComponent,
    TestComponent,
    FinishComponent,
    HomeComponent,
    ReportComponent,
    AddExamComponent,
    AddQuestionComponent,
    UpdateExamComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
