import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Buttons } from 'src/app/components/buttons/buttonsArray';
import { iButton } from 'src/app/components/buttons/iButton';
import { ButtonService } from 'src/app/services/button.service';

@Component({
  selector: 'app-backuprestore',
  templateUrl: './backuprestore.component.html',
  styleUrls: ['./backuprestore.component.css'],
})
export class BackuprestoreComponent implements OnInit {
  title: string = 'Backup & Restore';
  btns: iButton[] = Buttons;
  download: any;
  filename: string;
  check: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private btnService: ButtonService,
    public dialog: MatDialogRef<BackuprestoreComponent>
  ) {}

  backup() {
    //Preparing array
    if (this.btns.length === 0) {
      alert('There are no buttons');
      return;
    } else {
      let jsonData = JSON.stringify(this.btns);
      jsonData = jsonData.replace(
        /{"changingThisBreaksApplicationSecurity":/g,
        ''
      );
      jsonData = jsonData.replace(/},"volume"/g, ',"volume"');
      let uri = this.sanitizer.bypassSecurityTrustUrl(
        'data:text/json;charset=UTF-8,' + encodeURIComponent(jsonData)
      );
      this.download = uri;
      //Naming
      let today = new Date();
      let name =
        today.getFullYear() +
        '' +
        (today.getMonth() + 1) +
        '' +
        today.getDate() +
        '' +
        today.getHours() +
        '' +
        today.getMinutes();
      this.filename = 'DMMC_' + name + '.json';
    }
  }
  restore(event: any) {
    console.log('start');

    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onloadend = async () => {
      let file = reader.result as string;
      let newBtns = JSON.parse(file);
      for (let i = 0; i < newBtns.length; i++) {
        console.log(i);
        newBtns[i].audioData = this.sanitizer.bypassSecurityTrustUrl(
          newBtns[i].audioData
        );
      }
      this.btnService.restore(newBtns);
      console.log('end');
    };
    this.dialog.close();
  }

  ngOnInit(): void {
    if (this.btns.length !== 0) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
}
