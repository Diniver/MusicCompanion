import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { iButton } from '../iButton';
import { MatDialog } from '@angular/material/dialog';
import { BtnSettingsComponent } from '../btn-settings/btn-settings.component';
import { ButtonService } from 'src/app/services/button.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit, DoCheck {
  @Input() button: iButton;
  class: string;
  btnDisabled: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private buttonService: ButtonService,
    private audio: AudioService
  ) {
    this.buttonService.delay = this.audio.fadeDuration;
  }

  init() {
    this.button.isActive = !this.button.isActive;
    this.buttonService.disableButton(this.button);
    this.buttonService.styleChange(this.button);
    this.buttonService.inGroup(this.button);
    this.audio.playStop(this.button);
    this.button.btnDisabled = true;
    const wait = setTimeout(() => {
      this.button.btnDisabled = false;
    }, this.audio.fadeDuration);
  }
  openSettings(event: any) {
    event.preventDefault();
    this.matDialog.open(BtnSettingsComponent, {
      data: this.button,
    });
  }

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.class = this.button.color;
    this.btnDisabled = this.button.btnDisabled;
  }
}
