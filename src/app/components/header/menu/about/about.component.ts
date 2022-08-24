import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title: string = 'About';
  version: string = '0.13';

  @Output() ver = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {
    this.ver.emit(this.version);
  }
}
