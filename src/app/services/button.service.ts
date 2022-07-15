import { Injectable, Input } from '@angular/core';
import { iButton } from '../components/buttons/iButton';
import { Buttons } from '../components/buttons/buttonsArray';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor() {}
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
      //check if filename exist in array if not push
    } else {
      // modify current one slice?
    }
  }
}
