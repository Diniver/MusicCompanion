import { Injectable } from '@angular/core';
import { iButton } from '../components/buttons/iButton';
import { iFade } from './iFade';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  playStop(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    if (btn.isActive) {
      this.update(btn);
      player.currentTime = btn.trimStart; //Trimming the start
      player.play();
      this.fadeIn(btn); // It kinda works. It brakes if you dont wait the method to finish
      player.ontimeupdate = function () {
        if (player.currentTime >= player.duration - btn.trimEnd) {
          //Trimming the end
          if (player.loop === true) {
            player.currentTime = btn.trimStart;
          } else {
            // on end resets style and sets active state to false
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
      this.fadeOut(btn); // It kinda works. It brakes if you dont wait the method to finish
      //Player pause is in Fade out. It waits to fade and after that stops player
    }
  }
  update(btn: iButton) {
    //updating settings
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = btn.volume / 100;
    player.loop = btn.loop;
  }
  arrayIn: iFade[] = [];
  fadeDuration: number; //ms
  fadeIn(btn: iButton) {
    //Add fade volume calculation
    let id = btn.btnID;
    let btnVol = btn.volume;
    let interval: number = this.fadeDuration / btn.volume;
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    player.volume = 0;
    this.arrayIn.push({ id, player, btnVol, interval });
    // console.log(this.arrayIn[0].id);
    const fadeAudioIn = setInterval(
      () => {
        // console.log(this.arrayIn[0].id + '' + this.arrayIn[0].player.volume);

        if (
          this.arrayIn[0].player.volume >=
          this.arrayIn[0].btnVol / 100 - 0.01
        ) {
          this.arrayIn[0].player.volume = this.arrayIn[0].btnVol / 100;
          this.arrayIn.splice(0, 1);
          clearInterval(fadeAudioIn);
        } else {
          this.arrayIn[0].player.volume = this.arrayIn[0].player.volume + 0.01;
        }
      },
      this.arrayIn[0].interval //The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
    );
  }
  fadeOut(btn: iButton) {
    let player = <HTMLAudioElement>document.getElementById(btn.btnID);
    let interval: number = this.fadeDuration / btn.volume;

    const fadeAudioOut = setInterval(
      () => {
        // console.log(btn.btnID + '' + player.volume);
        if (player.volume <= 0 + 0.01) {
          player.volume = 0;
          player.pause();
          player.currentTime = btn.trimStart;
          clearInterval(fadeAudioOut);
        } else {
          player.volume = player.volume - 0.01;
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
