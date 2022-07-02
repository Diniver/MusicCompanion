import { Component, OnInit } from '@angular/core';
// import { IButton } from '../button';

@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css']
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';
  srcResult = '';
  // buttons: IButton[] = [{
  //   "buttonID": 0,
  //   "colorID": 2,
  //   "fileLocation": "",
  //   "fileTitle": "",
  //   "isActive": false,
  //   "useFileTitle": true,
  //   "label": "",
  //   "loop": false,
  //   "trimStart": 0,
  //   "trimEnd": 0,
  //   "volume": 100,

  // }];

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log(this.srcResult)
      };
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
