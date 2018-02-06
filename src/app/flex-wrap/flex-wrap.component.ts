import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-flex-wrap',
  templateUrl: './flex-wrap.component.html',
  styleUrls: ['./flex-wrap.component.css']
})
export class FlexWrapComponent implements OnInit {

  wrap:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.wrap = params['wrap']; 
   });
  }

}
