import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { iButton } from '../iButton';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonService } from 'src/app/services/button.service';
import { DriveComponent } from './drive/drive.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css'],
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';
  btnID: string;
  btnTitle: string;
  audioData: any = '';
  fileName: string = '';
  useTrackTitle: boolean;
  customName: string = '';
  btnColor: string = 'purple';
  volume: number = 80;
  loop: boolean;
  inGroup: boolean = true;
  trimStart: number = 0;
  trimEnd: number = 0;
  isActive: boolean;
  isDisabled: boolean;

  constructor(
    private domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: iButton,
    private service: ButtonService,
    private matDialog: MatDialog
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
      'audio/x-flac',
      'audio/x-wav',
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
  gDrive() {
    //Input for URL from Google Drive
    const dialog = this.matDialog.open(DriveComponent);
    dialog.afterClosed().subscribe((url) => {
      this.audioData = url;
      // try this type of asking for html. look for title and set is and filename
      // new method for getting the url info, get title data, set as fileName, run onCustomName

      // let link: any = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      // this.http.get(link, { responseType: 'text' }).subscribe((res) => {
      //   let nono = this.domSanitizer.bypassSecurityTrustHtml(res);
      //   console.log(nono);
      // });
      if (url) {
        this.fileName = url;
      }
      this.onCustomName();
    });
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
      this.service.removeButton(this.btnID);
    }
  }
  // Creating new button
  onSave() {
    if (this.fileName === '') {
      alert('Please select an audio file');
    } else {
      if (this.btnID === '') {
        //ID from time
        this.btnID = new Date().getTime().toString();
      }

      let newData: any = {};
      newData.btnID = this.btnID;
      newData.btnTitle = this.btnTitle;
      newData.fileName = this.fileName;
      newData.useTrackTitle = this.useTrackTitle;
      newData.audioData = this.audioData;
      newData.volume = this.volume;
      newData.color = this.btnColor.replace('-active', '');
      newData.inGroup = this.inGroup;
      newData.loop = this.loop;
      newData.trimStart = this.trimStart;
      newData.trimEnd = this.trimEnd;
      newData.isActive = this.isActive;
      this.service.addButton(newData);
    }
  }

  //Choose color
  setColor(value: string) {
    this.btnColor = value;
  }

  ngOnInit(): void {
    //Data is received from btn.component.
    if (this.data) {
      this.btnID = this.data.btnID;
      this.fileName = this.data.fileName;
      this.useTrackTitle = this.data.useTrackTitle;
      this.audioData = this.data.audioData;
      this.volume = this.data.volume;
      this.btnColor = this.data.color;
      this.isActive = this.data.isActive;
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
      this.inGroup = true;
      this.loop = false;
      this.isActive = false;
      this.btnID = '';
      this.isDisabled = false;
    }
  }
}
