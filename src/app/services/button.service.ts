import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';
import { Buttons } from '../components/buttons/buttonsArray';
import { Observable, of } from 'rxjs';
import { AudioService } from './audio.service';
@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  btns: iButton[] = [];
  constructor(private audioService: AudioService) {
    this.getButtons().subscribe((x) => (this.btns = x));
  }

  getButtons(): Observable<iButton[]> {
    const btn = of(Buttons);
    return btn;
  }
  restore(data: iButton) {
    debugger;
    this.btns.push(data);
  }
  removeButton(btnID: string) {
    let arrayID = this.btns.findIndex((x) => x.btnID === btnID);
    this.btns.splice(arrayID, 1);
  }
  addButton(data: iButton) {
    let arrayID = this.btns.findIndex((x) => x.btnID === data.btnID);
    if (arrayID === -1) {
      this.btns.push(data);
    } else {
      // modify current one
      // this.btns.splice(arrayID, 1, data);
      this.btns[arrayID].btnTitle = data.btnTitle;
      this.btns[arrayID].color = data.color;
      this.btns[arrayID].fileName = data.fileName;
      this.btns[arrayID].inGroup = data.inGroup;
      this.btns[arrayID].loop = data.loop;
      this.btns[arrayID].trimEnd = data.trimEnd;
      this.btns[arrayID].trimStart = data.trimStart;
      this.btns[arrayID].useTrackTitle = data.useTrackTitle;
      this.btns[arrayID].volume = data.volume;
      this.btns[arrayID].isActive = data.isActive;
      if (data.audioData !== this.btns[arrayID].audioData) {
        this.btns[arrayID].audioData = data.audioData;
      }
      this.styleChange(data);
      //Audio resets. Needs to be rebuild!!!
      this.audioService.update(data);
    }
  }
  inGroup(state: iButton) {
    const arrayColor = [];
    //Getting IDs with Color equal to source and making array
    for (let i = 0; i < this.btns.length; i++) {
      if (
        this.btns[i].color === state.color &&
        this.btns[i].inGroup === state.inGroup
      ) {
        //removing the current btnID from the array
        if (this.btns[i].btnID != state.btnID) arrayColor.push(i);
      }
    }
    arrayColor.forEach((x) => {
      if (state.inGroup === true && this.btns[x].isActive === true) {
        this.btns[x].isActive = false;
        this.styleChange(this.btns[x]);
        this.audioService.playStop(this.btns[x]);
      }
    });
  }
  styleChange(btn: iButton) {
    // there is some weird bug which brakes the colors in group if btn crurrently playing, during save ?!?!
    let arrayID = this.btns.findIndex((x) => x.btnID === btn.btnID);
    if (btn.isActive && btn.color === this.btns[arrayID].color) {
      this.btns[arrayID].color = this.btns[arrayID].color + '-active';
    } else if (btn.isActive === false) {
      this.btns[arrayID].color = this.btns[arrayID].color.replace(
        '-active',
        ''
      );
    }
  }
  stopAll() {
    //this is here since I need to check all buttons
    const arrayActive = [];
    for (let i = 0; i < this.btns.length; i++) {
      if (this.btns[i].isActive === true) {
        arrayActive.push(i);
      }
    }
    arrayActive.forEach((i) => {
      this.btns[i].isActive = false;
      this.audioService.playStop(this.btns[i]);
      this.styleChange(this.btns[i]);
      // create fade
      // this.audioService.fade();
    });
  }
  volumeMainControl(volM: number) {
    //Gets all btn volumes and calculate avarage value. This value is sent to audio service
    const arrVol = [];
    let btnVol: number;
    for (let i = 0; i < this.btns.length; i++) {
      arrVol.push(i);
    }
    arrVol.forEach((i) => {
      btnVol = this.btns[i].volume / 100;
      let totalVol = btnVol * volM;
      this.audioService.volumeMainControl(this.btns[i], totalVol);
    });
  }
}
