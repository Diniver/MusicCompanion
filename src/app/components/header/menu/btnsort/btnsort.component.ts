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
  colors: string[];
  order: boolean = false;

  constructor(private buttonService: ButtonService) {}

  drop(event: CdkDragDrop<iButton>) {
    moveItemInArray(this.buttons, event.previousIndex, event.currentIndex);
  }

  dropColor(event: CdkDragDrop<string>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

  color() {
    //sort by color
    this.buttons = this.buttons.sort((a, b) => {
      return this.colors.indexOf(a.color) - this.colors.indexOf(b.color);
    });
  }

  name() {
    // sort by name
    if (this.order) {
      this.order = false;
      this.buttons.sort((a, b) => {
        const nameA = a.btnTitle.toUpperCase(); // ignore upper and lowercase
        const nameB = b.btnTitle.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else {
      this.order = true;
      this.buttons.sort((a, b) => {
        const nameA = a.btnTitle.toUpperCase(); // ignore upper and lowercase
        const nameB = b.btnTitle.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  }

  ngOnInit(): void {
    this.buttonService.getButtons().subscribe((btn) => (this.buttons = btn));
    this.colors = this.buttons
      .map((item) => item.color)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
}
