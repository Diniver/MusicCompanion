import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css'],
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';
  btnId: number = 0;
  btnTitle: string = '';
  audioData: any = '';
  fileName: string = '';
  useTrackTitle: boolean = true;
  customName: string = '';
  btnColor: string = '';
  volume: number = 100;
  loop: boolean = false;
  inGroup: boolean = false;
  trimStart: number = 0;
  trimEnd: number = 0;

  constructor(private domSanitizer: DomSanitizer) {}

  // Select Audio file
  onFileInput(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    let audioFormatArr = [
      'audio/mp4',
      'audio/mpeg',
      'application/ogg',
      'audio/flac',
      'audio/wav',
    ];

    if (audioFormatArr.includes(file.type)) {
      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        let file: any = reader.result;
        this.audioData = this.domSanitizer.bypassSecurityTrustUrl(file);
      };

      reader.onerror = function () {
        console.log(reader.error);
      };

      // Taking file name from audio
      this.fileName = event.target.files[0].name;
    } else {
      console.error('U SUK');
      console.error('File format is ' + event.target.files[0].type);
      alert('Please select audio file');
    }
  }

  //Set Title
  onCustomName() {
    if (this.useTrackTitle) {
      this.btnTitle = this.fileName;
    } else {
      this.btnTitle = this.customName;
    }
  }

  //Choose color
  setColor(value: string) {
    this.btnColor = value;
    console.log('btnColor: ' + this.btnColor);
    console.log('btnTitle: ' + this.btnTitle);
    console.log('useTrackTitle: ' + this.useTrackTitle);
    console.log('volume: ' + this.volume);
    console.log('trimStart: ' + this.trimStart);
    console.log('trimEnd: ' + this.trimEnd);
    console.log('inGroup: ' + this.inGroup);
    console.log('loop: ' + this.loop);
  }

  ngOnInit(): void {}
}
