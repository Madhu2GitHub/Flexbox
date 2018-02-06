import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-align-items',
  templateUrl: './align-items.component.html',
  styleUrls: ['./align-items.component.css']
})
export class AlignItemsComponent implements OnInit {
  align:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.align = params['align']; 
   });
  }


}