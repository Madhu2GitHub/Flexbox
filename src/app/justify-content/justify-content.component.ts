import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-justify-content',
  templateUrl: './justify-content.component.html',
  styleUrls: ['./justify-content.component.css']
})
export class JustifyContentComponent implements OnInit {

  justify:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.justify = params['justify']; 
   });
  }


}
