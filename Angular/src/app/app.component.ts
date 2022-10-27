import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'FormSubmit';
  loggedin:boolean=false;
  ngOnInit(): void {
    if(window.localStorage.getItem('user')!=null)
      {
        this.loggedin=true;
      }
  }  
  ngAfterViewChecked(){
    if(window.localStorage.getItem('user')!=null)
    {
      this.loggedin=true;
    }
  }
  logout(){
    this.loggedin=false;
    window.localStorage.clear();
    window.location.replace("http://localhost:4200")
  }
}
