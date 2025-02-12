import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent1Component } from './sample-component1/sample-component1.component';
import { SampleComponent2Component } from './sample-component2/sample-component2.component';
import { SampleComponent3Component } from './sample-component3/sample-component3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent1Component,
    SampleComponent2Component,
    SampleComponent3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
