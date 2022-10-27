import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {FormControl,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student : Student=new Student();
  submitted = false;
  subscribeData:any=null;
  id:any;
  public exa:any;

  ngOnInit() {
    this.submitted=false;
    if(window.localStorage.getItem('user')!=null)
      {
        this.submitted=true;
        this.subscribeData=JSON.parse(window.localStorage.getItem('user'));
        this.id=this.subscribeData.sid
      }
  }

  studentloginform=new FormGroup({
    student_name:new FormControl(),
    student_email:new FormControl(),
    student_branch:new FormControl(),
    student_mobno:new FormControl(),
    student_city:new FormControl(),
    student_dob:new FormControl(),
    student_state:new FormControl(),
    student_yoc:new FormControl(),
    student_password:new FormControl(),
    student_test:new FormControl(),
    student_result:new FormControl()
  });

  loginStudent(loginStudent){
    this.student=new Student();   
    this.student.student_name=this.StudentName.value;
    this.student.student_email=this.StudentEmail.value;
    this.student.student_branch=this.StudentBranch.value;
    this.student.student_mobno=this.StudentMobno.value;
    this.student.student_city=this.StudentCity.value;
    this.student.student_dob=this.StudentDob.value;
    this.student.student_state=this.StudentState.value;
    this.student.student_yoc=this.StudentYoc.value;
    this.student.student_password=this.StudentPassword.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.studentservice.LoginStudent(this.student)
      .subscribe(data => {
        if(data!=null)
          this.setSubscribeData(data)
      })
      this.student=new Student();
  }

  setSubscribeData(data):any{  
     this.subscribeData=data;

     console.log(JSON.stringify(data))
     window.localStorage.setItem('user',JSON.stringify(data))
     this.id=data.sid;

     this.exa="Exam/"+this.id;
 }

  get StudentName(){
    return this.studentloginform.get('student_name');
  }

  get StudentEmail(){
    return this.studentloginform.get('student_email');
  }

  get StudentBranch(){
    return this.studentloginform.get('student_branch');
  }
  get StudentMobno(){
    return this.studentloginform.get('student_mobno');
  }
  get StudentCity(){
    return this.studentloginform.get('student_city');
  }
  get StudentDob(){
    return this.studentloginform.get('student_dob');
  }
  get StudentState(){
    return this.studentloginform.get('student_state');
  }
  get StudentYoc(){
    return this.studentloginform.get('student_yoc');
  }
  get StudentPassword(){
    return this.studentloginform.get('student_password');
  }
  get StudentTest(){
    return this.studentloginform.get('student_test');
  }
  get StudentResult(){
    return this.studentloginform.get('student_result');
  }

  addStudentForm(){
    this.submitted=false;
    window.localStorage.clear();
    this.studentloginform.reset();
    this.subscribeData=null;
  }

}
