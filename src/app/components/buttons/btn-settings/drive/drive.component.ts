import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css'],
})
export class DriveComponent implements OnInit {
  urlInput: string;
  urlOutput: string = '';
  constructor(public dialogRef: MatDialogRef<DriveComponent>) {}

  urlCheck() {
    //
    if (this.urlInput) {
      let urlArr = this.urlInput.split('/');
      if (
        urlArr.length === 7 &&
        urlArr[2] === 'drive.google.com' &&
        urlArr[3] === 'file'
      ) {
        let id = urlArr[5];
        this.urlOutput = 'https://docs.google.com/uc?export=open&id=' + id;
        // let data = {
        //   urlOutput: this.urlOutput,
        //   urlInput: this.urlInput,
        // };
        this.dialogRef.close(this.urlOutput);
      } else {
        alert('Please enter valid google drive URL');
      }
    }
  }
  ngOnInit(): void {}
}
