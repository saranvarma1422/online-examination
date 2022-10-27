import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { TestComponent } from './test/test.component';
import { FinishComponent } from './finish/finish.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Home/Exam', component: ExamComponent },
  { path: 'login/Exam/:id1', component: ExamComponent },
  { path: 'Home/Exam/Test/:id/:id2', component: TestComponent },
  { path: 'login/Exam/:id1/Test/:id/:id2', component: TestComponent },
  { path: 'Home/Exam/Test/:id/:id2/Finish/:sc', component: FinishComponent },
  { path: 'login/Exam/:id1/Test/:id/:id2/Finish/:sc', component: FinishComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Home/Report', component: ReportComponent },
  {path: 'aboutus',component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }