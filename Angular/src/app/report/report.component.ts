import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private studentservice:StudentService) { }
  test:string[];
  score:number[];
  studreport:any;
  user:any;
  ngOnInit() {
    this.save();
  }
  save() {
    this.user=JSON.parse(window.localStorage.getItem('user'))
    var jsonData ={"student_email":this.user.student_email};
    if(this.user.profile=="user")
     this.studentservice.Get(jsonData)
      .subscribe(data => {
        this.setSubscribeData(data)
      })
    else
      this.studentservice.GetAll().subscribe(data=>{
        this.studreport=data;
      })  
  }
  setSubscribeData(x){
    console.log("x.student_test:"+x.student_test[0]+this.user.profile)
    this.test=x.student_test;
    this.score=x.student_result;
  }
}
