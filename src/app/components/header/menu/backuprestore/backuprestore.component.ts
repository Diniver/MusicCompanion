import { Component, OnInit } from '@angular/core';
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

  constructor(
    private sanitizer: DomSanitizer,
    private btnService: ButtonService
  ) {}

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
  restore(event: any) {
    //
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onloadend = () => {
      let file = reader.result as string;
      let newBtns = JSON.parse(file);
      // Something happens on pushing the array
      // this.btnService.restore(newBtns);
    };
    // this.btns = json
    // let parsedJSON = JSON.parse(json);
    // console.log(parsedJSON);
  }

  ngOnInit(): void {}
}
