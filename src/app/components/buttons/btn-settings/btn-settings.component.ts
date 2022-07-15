import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { iButton } from '../iButton';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonService } from 'src/app/services/button.service';

@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css'],
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';
  btnTitle: string;
  audioData: any = '';
  fileName: string = '';
  useTrackTitle: boolean;
  customName: string = '';
  btnColor: string = 'purple';
  volume: number = 100;
  loop: boolean;
  inGroup: boolean;
  trimStart: number = 0;
  trimEnd: number = 0;
  isActive: boolean;

  constructor(
    private domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: iButton,
    private service: ButtonService
  ) {}

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
  // removing button from array
  onRemove() {
    if (this.fileName === '') {
    } else {
      this.service.removeButton(this.fileName);
    }
  }
  // Creating new button
  onSave() {
    if (this.fileName === '') {
      alert('Please select an audio file');
    } else {
      let newData: any = {};
      newData.btnTitle = this.btnTitle;
      newData.fileName = this.fileName;
      newData.useTrackTitle = this.useTrackTitle;
      newData.audioData = this.audioData;
      newData.volume = this.volume;
      newData.color = this.btnColor;
      newData.inGroup = this.inGroup;
      newData.loop = this.loop;
      newData.trimStart = this.trimStart;
      newData.trimEnd = this.trimEnd;
      this.service.addButton(newData);
    }
  }

  //Choose color
  setColor(value: string) {
    this.btnColor = value;
    console.log('btnColor: ' + this.btnColor);
    console.log('btnTitle: ' + this.btnTitle);
    console.log('customName: ' + this.customName);
    console.log('useTrackTitle: ' + this.useTrackTitle);
    console.log('volume: ' + this.volume);
    console.log('trimStart: ' + this.trimStart);
    console.log('trimEnd: ' + this.trimEnd);
    console.log('inGroup: ' + this.inGroup);
    console.log('loop: ' + this.loop);
  }

  ngOnInit(): void {
    //Data is received from btn.component.
    if (this.data) {
      this.fileName = this.data.fileName;
      this.useTrackTitle = this.data.useTrackTitle;
      this.audioData = this.data.audioData;
      this.volume = this.data.volume;
      this.btnColor = this.data.color;
      this.inGroup = this.data.inGroup;
      this.loop = this.data.loop;
      this.trimStart = this.data.trimStart;
      this.trimEnd = this.data.trimEnd;
      if (this.useTrackTitle) {
        this.btnTitle = this.data.fileName;
        this.customName = this.btnTitle;
      } else {
        this.btnTitle = this.data.btnTitle;
        this.customName = this.data.btnTitle;
      }
      //If there is no data, do the following
    } else {
      this.useTrackTitle = true;
      this.inGroup = false;
      this.loop = false;
    }
  }
}
