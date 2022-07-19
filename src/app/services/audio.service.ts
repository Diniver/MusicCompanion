import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { iButton } from '../components/buttons/iButton';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  playStop(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    // player.volume = btn.volume / 100;
    //when song finishes needs to change color back to normal
    if (btn.isActive) {
      player.loop = btn.loop;
      player.currentTime = btn.trimStart;
      player.play();
      this.endCheck(btn);
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
  endCheck(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);

    // while (btn.isActive) {
    // if (player.ended) {
    //   btn.isActive = false;
    //   btn.color = btn.color.replace('-active', '');
    // }
    //     }
  }
  fade() {
    //Add fade volume calculation
  }
  volume() {
    //
  }
}
