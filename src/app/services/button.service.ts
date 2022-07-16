import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';
import { Buttons } from '../components/buttons/buttonsArray';
import { Observable, of } from 'rxjs';
import { AudioService } from './audio.service';
@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor(private audioService: AudioService) {}

  getButtons(): Observable<iButton[]> {
    const btn = of(Buttons);
    return btn;
  }
  removeButton(name: string) {
    let bttns: iButton[] = [];
    this.getButtons().subscribe((btns) => (bttns = btns));
    let arrayID = bttns.findIndex((ari) => ari.fileName === name);
    bttns.splice(arrayID, 1);
  }
  addButton(data: iButton) {
    let bttns: iButton[] = [];
    this.getButtons().subscribe((btns) => (bttns = btns));
    let arrayID = bttns.findIndex((ari) => ari.fileName === data.fileName);
    if (arrayID === -1) {
      bttns.push(data);
    } else {
      // modify current one
      bttns.splice(arrayID, 1, data);
    }
  }
  inGroup(state: iButton) {
    let bttns: iButton[] = [];
    this.getButtons().subscribe((btns) => (bttns = btns));
    const arrayColor = [];
    //Getting IDs with Color equal to source and making array
    for (let i = 0; i < bttns.length; i++) {
      if (
        bttns[i].color === state.color &&
        bttns[i].inGroup === state.inGroup
      ) {
        //removing the current btnID from the array
        if (bttns[i].fileName != state.fileName) arrayColor.push(i);
      }
    }
    arrayColor.forEach((x) => {
      if (state.inGroup === true && bttns[x].isActive === true) {
        bttns[x].isActive = false;
        this.styleChange(bttns[x]);
        this.audioService.playStop(bttns[x]);
      }
    });
  }
  styleChange(btn: iButton) {
    let bttns: iButton[] = [];
    this.getButtons().subscribe((btns) => (bttns = btns));
    let arrayID = bttns.findIndex((ari) => ari.fileName === btn.fileName);
    if (btn.isActive && btn.color === bttns[arrayID].color) {
      bttns[arrayID].color = bttns[arrayID].color + '-active';
    } else if (btn.isActive === false) {
      let x: string = '';
      bttns[arrayID].color = bttns[arrayID].color.replace('-active', x);
    }
  }
}
