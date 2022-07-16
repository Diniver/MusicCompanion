import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  playStop(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.fileName);
    player.volume = btn.volume / 100;
    player.loop = btn.loop;
    console.log(player.volume);
    if (btn.isActive) {
      player.currentTime = btn.trimStart;
      player.play();
      console.log(btn.btnTitle + ' is playing');
    } else {
      player.pause();
      player.currentTime = btn.trimStart;
      console.log(btn.btnTitle + ' is paused/stopped');
    }
  }
}
