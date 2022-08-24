import { Component, OnInit } from '@angular/core';
import { iButton } from 'src/app/components/buttons/iButton';
import { ButtonService } from 'src/app/services/button.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-btnsort',
  templateUrl: './btnsort.component.html',
  styleUrls: ['./btnsort.component.css'],
})
export class BtnsortComponent implements OnInit {
  title: string = 'Sort Buttons';
  buttons: iButton[] = [];
  constructor(private buttonService: ButtonService) {}

  drop(event: CdkDragDrop<iButton>) {
    moveItemInArray(this.buttons, event.previousIndex, event.currentIndex);
  }

  color() {
    //sort by color
  }

  name() {
    // sort by name
  }

  ngOnInit(): void {
    this.buttonService.getButtons().subscribe((btn) => (this.buttons = btn));
  }
}
