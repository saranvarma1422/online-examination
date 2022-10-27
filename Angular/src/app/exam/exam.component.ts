import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Exam, Question } from '../object';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private adminService:AdminService) { }
  user:any;
  public sid:any;
  public tes:any;

  public edited:boolean=false;
  public selected:number=-1;
  public app:any;
  exam:Exam=new Exam();
  message:any="hello";

  public quesExamId:number=-1;
  public question:Question=new Question()
  public exams:any;

  public viewQues:number=-1;

  editExamForm=new FormGroup({
    exam_name:new FormControl()
  })
  addExamForm=new FormGroup({
    exam_name:new FormControl()
  })
  
  questionExamForm=new FormGroup({
    question_name:new FormControl(),
    question_optiona:new FormControl(),
    question_optionb:new FormControl(),
    question_optionc:new FormControl(),
    question_optiond:new FormControl(),
    question_ans:new FormControl()
  })

  get Q_name(){
    return this.questionExamForm.get('question_name')
  }
  get Q_optiona(){
    return this.questionExamForm.get('question_optiona')
  }
  get Q_optionb(){
    return this.questionExamForm.get('question_optionb')
  }
  get Q_optionc(){
    return this.questionExamForm.get('question_optionc')
  }
  get Q_optiond(){
    return this.questionExamForm.get('question_optiond')
  }
  get Q_ans(){
    return this.questionExamForm.get('question_ans')
  }

  addExam(addexam){
    this.exam.name=this.Name.value;
    this.exam.addedBy=this.user.student_email;
    console.log(this.exam.name+","+this.exam.addedBy)
    this.adminService.createExam(this.exam).subscribe(data=>this.message=data)
    this.exam=new Exam();
    this.addExamForm.reset();
    this.adminService.getAllExams().subscribe(data=>this.exams=data);
  }

  ngOnInit() {
    this.user=JSON.parse(window.localStorage.getItem('user'))
    this._Activatedroute.paramMap.subscribe(params => { 
      this.sid = params.get('id1');      
    });
    this.tes="Test/"+this.sid;
    this.adminService.getAllExams().subscribe(data=>this.exams=data);
  }
  get Name(){
    return this.addExamForm.get('exam_name');
  }
  get EditName(){
    return this.editExamForm.get('exam_name');
  }
  onClose(){
    this.message=''
  }
  deleteExam(e:Exam){
    this.adminService.deleteExam(e).subscribe(data=>{
      this.message=data?"deleted successfully":"delete failed";
      window.location.reload()
    });
  }
  editExam(e:Exam){
    var data1=this.exams[this.selected];
    data1.name=this.EditName.value
    console.log(data1.name)
    this.adminService.updateExam(data1).subscribe(data=>{
      this.adminService.getAllExams().subscribe(data=>{
        this.exams=data;
        this.selected=-1;
      })
    });
  }
  addQuestion(e:any){
  this.question=new Question();
  this.question.examId=this.exams[this.quesExamId].examId;
  this.question.question=this.Q_name.value;
  this.question.answer=this.Q_ans.value-1;
  this.question.options=[];
  this.question.options.push(this.Q_optiona.value);
  this.question.options.push(this.Q_optionb.value);
  this.question.options.push(this.Q_optionc.value);
  this.question.options.push(this.Q_optiond.value);
  this.adminService.addQuestion(this.question).subscribe(data=>this.message=data);
  this.questionExamForm.reset();
  this.quesExamId=-1;
  }

  deleteQuestion(q:object){
    this.adminService.deleteQuestion(q,this.exams[this.viewQues].examId).subscribe(data=>{
      this.adminService.getAllExams().subscribe(d=>this.exams=d);
    })
  }
  moveBack(){
    this.viewQues=-1;
  }
}
