import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  playStop(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    if (btn.isActive) {
      player.loop = btn.loop;
      player.currentTime = btn.trimStart;
      player.play();
      // on end resets style and sets active state to false
      player.onended = function () {
        btn.isActive = false;
        btn.color = btn.color.replace('-active', '');
      };
    } else {
      player.pause();
      player.currentTime = btn.trimStart;
    }
  }
  update(btn: iButton) {
    //updating settings
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = btn.volume / 100;
    player.loop = btn.loop;
  }
  fade() {
    //Add fade volume calculation
  }
  volumeMainControl(btn: iButton, totalVol: number) {
    //
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = totalVol;
    console.log(player.volume);
  }
}
