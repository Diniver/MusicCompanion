import { Component, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/services/button.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  value: number = 100;
  constructor(private buttonService: ButtonService) {}

  stopAll() {
    this.buttonService.stopAll();
  }

  setVolume() {
    this.buttonService.volumeMainControl(this.value / 100);
  }
  volD() {
    this.value = this.value - 5;
    if (this.value < 0) {
      this.value = 0;
    }
  }
  volU() {
    this.value = this.value + 5;
    if (this.value > 100) {
      this.value = 100;
    }
  }
  ngOnInit(): void {}
}
