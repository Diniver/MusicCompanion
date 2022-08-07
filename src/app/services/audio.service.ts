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
      this.update(btn);
      //Trimming the start
      player.currentTime = btn.trimStart;
      player.play();
      this.fadeIn(btn); // It kinda works
      // on end resets style and sets active state to false
      player.ontimeupdate = function () {
        //Trimming the end
        if (player.currentTime >= player.duration - btn.trimEnd) {
          if (player.loop === true) {
            player.currentTime = btn.trimStart;
          } else {
            player.pause();
            player.currentTime = btn.trimStart;
            btn.isActive = false;
            btn.color = btn.color.replace('-active', '');
          }
        }
      };
      player.onended = function () {
        btn.isActive = false;
        btn.color = btn.color.replace('-active', '');
      };
    } else {
      // this.fadeOut(btn); // It does not work
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
  fadeIn(btn: iButton) {
    //Add fade volume calculation
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    let fadeDuration: number = 2000; //ms
    let interval: number = fadeDuration / btn.volume;
    player.volume = 0;
    const fadeAudio = setInterval(
      () => {
        player.volume = player.volume + 0.01;

        if (player.volume >= btn.volume / 100 - 0.1) {
          player.volume = btn.volume / 100;
          clearInterval(fadeAudio);
          
        }
      },
      interval //The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
    );
  }
  fadeOut(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    let fadeDuration: number = 2000; //ms
    let interval: number = fadeDuration / btn.volume;
    const fadeAudio = setInterval(
      () => {
        player.volume = player.volume - 0.01;
        console.log(player.volume);
        if (player.volume <= 0) {
          player.volume = 0;
          clearInterval(fadeAudio);
        }
      },
      interval //The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
    );
  }
  volumeMainControl(btn: iButton, totalVol: number) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = totalVol;
  }
}
