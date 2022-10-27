import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student : Student=new Student();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  studentsaveform=new FormGroup({
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    student_email:new FormControl('',[Validators.required,Validators.email]),
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

  saveStudent(saveStudent){
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
    this.studentservice.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }
  get StudentName(){
    return this.studentsaveform.get('student_name');
  }

  get StudentEmail(){
    return this.studentsaveform.get('student_email');
  }

  get StudentBranch(){
    return this.studentsaveform.get('student_branch');
  }
  get StudentMobno(){
    return this.studentsaveform.get('student_mobno');
  }
  get StudentCity(){
    return this.studentsaveform.get('student_city');
  }
  get StudentDob(){
    return this.studentsaveform.get('student_dob');
  }
  get StudentState(){
    return this.studentsaveform.get('student_state');
  }
  get StudentYoc(){
    return this.studentsaveform.get('student_yoc');
  }
  get StudentPassword(){
    return this.studentsaveform.get('student_password');
  }
  get StudentTest(){
    return this.studentsaveform.get('student_test');
  }
  get StudentResult(){
    return this.studentsaveform.get('student_result');
  }

  addStudentForm(){
    this.submitted=false;
    this.studentsaveform.reset();
  }
}
