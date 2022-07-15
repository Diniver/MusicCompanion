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
  removeButton(id: number) {
    let bttns: iButton[] = [];
    this.getButtons().subscribe((btns) => (bttns = btns));
  }
}
