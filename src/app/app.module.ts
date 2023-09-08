import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepipeComponent } from './pipetutorial/datepipe/datepipe.component';
import { Uppercasepipe } from './custompipe/uppercasepipe';
import { LowercasepipePipe } from './custompipe/lowercasepipe.pipe';
import { AsynPipeComponent } from './asyn-pipe/asyn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepipeComponent,
    Uppercasepipe,
    LowercasepipePipe,
    AsynPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
