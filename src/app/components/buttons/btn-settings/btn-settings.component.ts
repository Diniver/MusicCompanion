import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-btn-settings',
  templateUrl: './btn-settings.component.html',
  styleUrls: ['./btn-settings.component.css']
})
export class BtnSettingsComponent implements OnInit {
  title = 'Button Settings';

  // File Explorer button
  fileName: string = '';
  loop: boolean = false;
  inGroup: boolean = false;
  cleanAudio: any = '';

  constructor(private domSanitizer: DomSanitizer) { }

  onFileInput(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    let audioFormatArr = ['audio/mp4', 'audio/mpeg', 'application/ogg', 'audio/flac', 'audio/wav'];

    if (audioFormatArr.includes(file.type)) {

      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        let file: any = reader.result;
        this.cleanAudio = this.domSanitizer.bypassSecurityTrustUrl(file);
      };

      reader.onerror = function () {
        console.log(reader.error);
      };

      this.fileName = event.target.files[0].name;
      console.log(this.fileName);
    }
    else {
      console.error('U SUK');
      console.error(event.target.files[0].type);
    }
  }

  //Choose color
  btnColor: string = '';

  setColor(value: string) {
    this.btnColor = value;
    console.log(this.btnColor)
    console.log(this.inGroup);
    console.log(this.loop);
  }


  ngOnInit(): void {
  }

}
