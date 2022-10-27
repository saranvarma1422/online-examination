import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private studentservice:StudentService,private adminService:AdminService) { }
  public id:any;

  public ans:any;

  public result:any;

  public sendata:{}={};

ansHtml=["d","b","a","b"]
 quizHtml = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        cor: "d",
        n:1,
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        cor: "b",
        n:2,
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        cor: "a",
        n:3,
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        cor: "b",
        n:4,
    },
  ]
ansJava=["a","b","b","b"]
  quizJava = [
    {
        question: "What is the size of float and double in java ?",
        a: "32 and 64",
        b: "32 and 32",
        c: "64 and 64",
        d: "64 and 32",
        n:1,
    },
    {
        question: "Select the valid statement.",
        a: "char[] ch = new char(5)",
        b: "char[] ch = new char[5]",
        c: "char[] ch = new char()",
        d: "char[] ch = new char[]",
        n:2,
    },
    {
        question: "Select the valid statement to declare and initialize an array.",
        a: "int[] A = {}",
        b: "int[] A = {1, 2, 3}",
        c: "int[] A = (1, 2, 3)",
        d: "int[][] A = {1,2,3}",
        n:3,
    },
    {
        question: "Arrays in java are ______",
        a: "Object references",
        b: "objects",
        c: "Primitive data type",
        d: "None",
        n:4,
    },
  ]
ansSql=["d","a","c","d"];
  quizSql = [
    {
        question: "Which of the following are some common RDBMS in use ?",
        a: "JaOracleva",
        b: "MySQL",
        c: "HeidiSQL",
        d: "All of the above",
        n:1,
    },
    {
        question: "Which of the following commands is used to delete all rows and free up space from a table ?",
        a: "TRUNCATE",
        b: "DROP",
        c: "DELETE",
        d: "ALTER",
        n:2,
    },
    {
        question: "What are rows of a relation known as ?",
        a: "Degree",
        b: "Entity",
        c: "Tuple",
        d: "None",
        n:3,
    },
    {
        question: "Which of the following are valid logical operators in SQL ?",
        a: "SOME",
        b: "ALL",
        c: "AND",
        d: "All of the above",
        n:4,
    },
  ]
public selectedQuiz:any;
public dbdata:String;
public anscheck:any;
public sid:any;
public submitted:boolean=false;
public exams:any;
  quizQ={1:this.quizHtml,0:this.quizJava,2:this.quizSql};
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id2'); 
      this.sid=params.get('id');
      console.log(this.id+"examid");
      console.log(this.sid+"sid");
    });
  this.selectedQuiz=this.quizQ[this.id];
  if(this.id==0){
    this.anscheck=this.ansJava;
    this.dbdata="Java";
  }
  else if(this.id==1){
    this.anscheck=this.ansHtml
    this.dbdata="Html";
  }
  else if(this.id==2){
    this.anscheck=this.ansSql
    this.dbdata="Sql";
  }else{
       this.adminService.getAllExams().subscribe(data=>{
           this.exams=data;
           for(let j=0;j<this.exams.length;j++){
            if(this.exams[j].examId==this.id){
              this.selectedQuiz=[]
              this.anscheck=[]
              var e=this.exams[j].questions;
              for(let k=0;k<e.length;k++){
                 var q={question:e[k].question,a:e[k].options[0],b:e[k].options[1],c:e[k].options[2],d:e[k].options[3],n:k+1};
                 this.selectedQuiz.push(q);
                 this.anscheck.push(this.getOption(e[k].answer))
              }
              this.dbdata=this.exams[j].name;
              break;
            }
           }
       })
  }
  }
  getOption(n:number){
    switch(n){
      case 0:
        return "a";
      case 1:
        return "b";
      case 2:
        return "c";
      case 3:
        return "d";
      default:
        return "a";
    }
  }
  public score=0;
  scoregrn(e){
    this.ans=e.target.id;
    if(this.anscheck[e.target.name-1]==this.ans)
    {
    this.score++;
    }
  }
  
  send() {
    var user=JSON.parse(window.localStorage.getItem('user'))
    
    var jsonData = {"id":user.sid,"student_test":this.dbdata,"student_result":this.score,"email":user.student_email,"numberOfQuestions":this.anscheck.length};
    console.log("id"+jsonData)
    this.submitted=true;
    this.sendata=jsonData;
    this.studentservice.TestSelect(this.sendata).subscribe(data=> this.result = 
    data);
    }

  

}
