import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.order = params['order']; 
   });
  }

}
