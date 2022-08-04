import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Buttons } from 'src/app/components/buttons/buttonsArray';
import { iButton } from 'src/app/components/buttons/iButton';

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

  constructor(private sanitizer: DomSanitizer) {}

  backup() {
    //
    let jsonData = JSON.stringify(this.btns);
    let uri = this.sanitizer.bypassSecurityTrustUrl(
      'data:text/json;charset=UTF-8,' + encodeURIComponent(jsonData)
    );
    this.download = uri;
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
  restore() {
    //
  }

  ngOnInit(): void {}
}
