import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { iButton } from '../iButton';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from '../btn-settings/btn-settings.component';
import { ButtonService } from 'src/app/services/button.service';
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit, DoCheck {
  @Input() button: iButton;
  class: string;

  constructor(
    private matDialog: MatDialog,
    private buttonService: ButtonService
  ) {}

  playStop() {
    this.button.isActive = !this.button.isActive;
    this.buttonService.styleChange(this.button);
    this.buttonService.inGroup(this.button);
    this.class = this.button.color;
    //Style is not shifting back
  }
  openSettings(event: any) {
    event.preventDefault();
    this.matDialog.open(BtnSettingsComponent, {
      data: this.button,
    });
  }

  ngOnInit(): void {
    this.class = this.button.color;
  }
  ngDoCheck(): void {
    this.class = this.button.color;
    this.button.isActive;
  }
}
