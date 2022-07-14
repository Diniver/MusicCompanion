import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from '../btn-settings/btn-settings.component';
import { ButtonService } from '../../../services/button.service';
import { iButton } from '../iButton';

@Component({
  selector: 'app-btn-grid',
  templateUrl: './btn-grid.component.html',
  styleUrls: ['./btn-grid.component.css'],
})
export class BtnGridComponent implements OnInit {
  buttons: iButton[] = [];
  constructor(
    private matDialog: MatDialog,
    private buttonService: ButtonService
  ) {}
  openBtnSettings() {
    this.matDialog.open(BtnSettingsComponent);
  }

  ngOnInit(): void {
    this.buttonService.getButtons().subscribe((btn) => (this.buttons = btn));
  }
}
