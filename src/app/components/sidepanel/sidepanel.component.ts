import { Component, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/services/button.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  constructor(private buttonService: ButtonService) {}
  stopAll() {
    this.buttonService.stopAll();
  }
  ngOnInit(): void {}
}
