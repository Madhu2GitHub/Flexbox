import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-flex-flow',
  templateUrl: './flex-flow.component.html',
  styleUrls: ['./flex-flow.component.css']
})
export class FlexFlowComponent implements OnInit {

  wrap:string;
  direction:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.wrap = params['wrap']; 
      this.direction = params['direction']; 
   });
  }

}
