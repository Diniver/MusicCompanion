import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Angular Materials
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnSettingsComponent } from './components/buttons/btn-settings/btn-settings.component';
import { BtnGridComponent } from './components/buttons/btn-grid/btn-grid.component';
import { PagesComponent } from './components/pages/pages.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { BtnComponent } from './components/buttons/btn/btn.component';
import { ButtonService } from './services/button.service';
import { AudioService } from './services/audio.service';
import { BackuprestoreComponent } from './components/header/menu/backuprestore/backuprestore.component';
import { AboutComponent } from './components/header/menu/about/about.component';
import { DriveComponent } from './components/buttons/btn-settings/drive/drive.component';
import { FAQComponent } from './components/header/menu/FAQ/FAQ.component';
import { BtnsortComponent } from './components/header/menu/btnsort/btnsort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnSettingsComponent,
    BtnGridComponent,
    PagesComponent,
    SidepanelComponent,
    BtnComponent,
    BackuprestoreComponent,
    AboutComponent,
    DriveComponent,
    FAQComponent,
    BtnsortComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCommonModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
