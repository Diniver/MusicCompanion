import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackuprestoreComponent } from './menu/backuprestore/backuprestore.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'DMMC';
  opened = false;
  fadeDuration:number = 1700 //ms

  constructor(private matDialog: MatDialog) {}
  open() {
    this.matDialog.open(BackuprestoreComponent);
    this.opened = false;
  }

  ngOnInit(): void {}
}
