import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './components/header/menu/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  version: string;
  constructor(private matDialog: MatDialog) {}

  openVer() {
    this.matDialog.open(AboutComponent);
  }
}
