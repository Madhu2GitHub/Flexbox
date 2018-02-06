import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlexDirectionComponent } from './flex-direction/flex-direction.component';
import { AppRoutingModule }  from './app-routing.module';
import { FlexComponent } from './flex/flex.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';
import { FlexFlowComponent } from './flex-flow/flex-flow.component';
import { JustifyContentComponent } from './justify-content/justify-content.component';
import { AlignItemsComponent } from './align-items/align-items.component';
import { AlignContentComponent } from './align-content/align-content.component';
import { OrderComponent } from './order/order.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexBasisComponent } from './flex-basis/flex-basis.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexDirectionComponent,
    FlexComponent,
    FlexWrapComponent,
    FlexFlowComponent,
    JustifyContentComponent,
    AlignItemsComponent,
    AlignContentComponent,
    OrderComponent,
    FlexGrowComponent,
    FlexBasisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
