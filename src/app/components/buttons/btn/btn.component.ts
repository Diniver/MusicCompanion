import { Component, Input, OnInit } from '@angular/core';
import { iButton } from '../iButton';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BtnSettingsComponent } from '../btn-settings/btn-settings.component';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit {
  @Input() button: iButton;
  class: string;

  constructor(private matDialog: MatDialog) {}

  playStop() {
    this.button.isActive = !this.button.isActive;
    //Changing Style
    if (this.button.isActive) {
      this.class = this.button.color + '-active';
    } else {
      this.class = this.button.color;
    }
  }

  openSettings() {
    this.matDialog.open(BtnSettingsComponent, {
      data: this.button,
    });
  }

  ngOnInit(): void {
    this.class = this.button.color;
  }
}
