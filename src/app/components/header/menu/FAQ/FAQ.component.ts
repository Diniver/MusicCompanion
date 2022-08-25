import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css'],
})
export class FAQComponent implements OnInit {
  title: string = 'FAQ';
  constructor() {}

  ngOnInit(): void {}
}
