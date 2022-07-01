import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { BtnSettingsComponent, } from './btn-settings/btn-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnSettingsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
