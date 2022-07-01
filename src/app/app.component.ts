import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from './btn-settings/btn-settings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DMMC';
constructor(private matDialog: MatDialog){}

openDialog(){
  this.matDialog.open(BtnSettingsComponent);
}
}