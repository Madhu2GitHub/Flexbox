import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-align-content',
  templateUrl: './align-content.component.html',
  styleUrls: ['./align-content.component.css']
})
export class AlignContentComponent implements OnInit {
  align:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.align = params['align']; 
   });
  }


}
