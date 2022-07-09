import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from '../btn-settings/btn-settings.component';



@Component({
  selector: 'app-btn-grid',
  templateUrl: './btn-grid.component.html',
  styleUrls: ['./btn-grid.component.css']
})
export class BtnGridComponent implements OnInit {


  constructor(private matDialog: MatDialog) { }

  openBtnSettings() {
    this.matDialog.open(BtnSettingsComponent);
  }
  
  ngOnInit(): void {
  }

}
