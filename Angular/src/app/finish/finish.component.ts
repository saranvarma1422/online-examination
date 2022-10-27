import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute) { }
public sc:any;
public eligiblecri:any;
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.sc = params.get('sc'); 
  });
  this.sc=this.sc*10;
  if(this.sc>50){
    this.eligiblecri="You have successfully cleared the test";
  }
  else{
    this.eligiblecri="Better luck next time"
  }
}

}