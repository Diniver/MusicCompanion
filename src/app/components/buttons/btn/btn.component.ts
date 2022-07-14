import { Component, Input, OnInit } from '@angular/core';
import { iButton } from '../iButton';
import { MatDialog } from '@angular/material/dialog';

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
    //Changing Style
    this.button.isActive = !this.button.isActive;
    if (this.button.isActive) {
      this.class = this.button.color + '-active';
    } else {
      this.class = this.button.color;
    }
  }

  openSettings() {
    console.log('openSettings');
  }

  ngOnInit(): void {
    this.class = this.button.color;
  }
}
