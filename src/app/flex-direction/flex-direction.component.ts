import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-flex-direction',
  templateUrl: './flex-direction.component.html',
  styleUrls: ['./flex-direction.component.css']
})
export class FlexDirectionComponent implements OnInit {

  direction:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.direction = params['direction']; 
   });
  }

}
