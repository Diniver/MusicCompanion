import {
  Component,
  OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackuprestoreComponent } from './menu/backuprestore/backuprestore.component';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'DMMC';
  opened = true;
  fadeDuration: number = 2000; //ms

  constructor(private matDialog: MatDialog, private audio: AudioService) {
    this.audio.fadeDuration = this.fadeDuration
  }
  open() {
    this.matDialog.open(BackuprestoreComponent);
    this.opened = false;
  }
  push() {
    this.audio.fadeDuration = this.fadeDuration;
  }

  ngOnInit(): void {}
}
