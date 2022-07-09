import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from './components/buttons/btn-settings/btn-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor(private matDialog: MatDialog) { }

  openBtnSettings() {
    this.matDialog.open(BtnSettingsComponent);
  }
}