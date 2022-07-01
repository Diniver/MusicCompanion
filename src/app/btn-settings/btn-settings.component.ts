import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css']
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';
  constructor() { }

  ngOnInit(): void {
  }

}
