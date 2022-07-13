import { Component, OnInit } from '@angular/core';
import { iButton } from '../iButton';
import { MatDialog } from '@angular/material/dialog';
import { ButtonService } from '../../../services/button.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit {
  buttons: iButton[] = [];

  constructor(
    private matDialog: MatDialog,
    private buttonService: ButtonService
  ) {}

  playStop() {}

  openSettings() {
    console.log('my horse is amazing');
  }

  ngOnInit(): void {
    this.buttonService.getButtons().subscribe((btn) => (this.buttons = btn));
  }
}
