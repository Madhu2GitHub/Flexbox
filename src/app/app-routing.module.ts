import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FlexComponent} from './flex/flex.component';
import { FlexDirectionComponent } from './flex-direction/flex-direction.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';
import { FlexFlowComponent } from './flex-flow/flex-flow.component';
import { JustifyContentComponent } from './justify-content/justify-content.component';
import { AlignItemsComponent } from './align-items/align-items.component';
import { AlignContentComponent } from './align-content/align-content.component';
import { OrderComponent } from './order/order.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexBasisComponent } from './flex-basis/flex-basis.component';
import { NgFlexComponent } from './ng-flex/ng-flex.component';
const appRoutes: Routes = [
    {
      path: '', pathMatch: 'prefix', component: AppComponent,
      children: 
      [
          { path: '', pathMatch: 'prefix',  component: FlexComponent },
          { path: 'flex-direction/:direction', pathMatch: 'prefix', component: FlexDirectionComponent },
          { path: 'flex-wrap/:wrap', pathMatch: 'prefix', component: FlexWrapComponent },
          { path: 'flex-flow/:direction/:wrap', pathMatch: 'prefix', component: FlexFlowComponent },
          { path: 'justify-content/:justify', pathMatch: 'prefix', component: JustifyContentComponent }, 
          { path: 'align-items/:align', pathMatch: 'prefix', component: AlignItemsComponent },
          { path: 'align-content/:align', pathMatch: 'prefix', component: AlignContentComponent },
          { path: 'order/:order', pathMatch: 'prefix', component: OrderComponent },
          { path: 'flex-grow', pathMatch: 'prefix', component: FlexGrowComponent },
          { path: 'flex-basis', pathMatch: 'prefix', component: FlexBasisComponent },
          { path: 'ng-flex', pathMatch: 'prefix', component: NgFlexComponent }          
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }