import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  openExam(){
    if(window.localStorage.getItem('user'))
      this.route.navigate(['/Home/Exam']);
    else
      alert("please Login and try again!")
  }

  openReport(){
    if(window.localStorage.getItem('user'))
    this.route.navigate(['/Home/Report']);
  else
    alert("please Login and try again!")
  }
}
