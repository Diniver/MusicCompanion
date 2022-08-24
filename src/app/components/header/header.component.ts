import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackuprestoreComponent } from './menu/backuprestore/backuprestore.component';
import { AudioService } from 'src/app/services/audio.service';
import { AboutComponent } from './menu/about/about.component';
import { TutorialComponent } from './menu/tutorial/tutorial.component';
import { BtnsortComponent } from './menu/btnsort/btnsort.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'DMMC';
  opened: boolean = true;
  fadeDuration: number = 2000; //ms

  constructor(private matDialog: MatDialog, private audio: AudioService) {
    this.audio.fadeDuration = this.fadeDuration;
  }

  tutorial() {
    this.matDialog.open(TutorialComponent, { maxHeight: '90vh' });
    this.opened = false; // Closes menu on click
  }
  btnSort() {
    this.matDialog.open(BtnsortComponent, { maxHeight: '90vh' });
    this.opened = false; // Closes menu on click
  }
  backup() {
    this.matDialog.open(BackuprestoreComponent);
    this.opened = false; // Closes menu on click
  }

  about() {
    this.matDialog.open(AboutComponent, { maxHeight: '90vh' });
    this.opened = false; // Closes menu on click
  }

  fade() {
    this.audio.fadeDuration = this.fadeDuration;
  }

  ngOnInit(): void {}
}
