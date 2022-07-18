import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  playStop(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = btn.volume / 100;
    //when song finishes needs to change color back to normal
    player.loop = btn.loop;
    if (btn.isActive) {
      player.currentTime = btn.trimStart;
      player.play();
    } else {
      player.pause();
      player.currentTime = btn.trimStart;
    }
  }
  fade() {
    //Add fade volume calculation
  }
  volume() {
    //
  }
}
