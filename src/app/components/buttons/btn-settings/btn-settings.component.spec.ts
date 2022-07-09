import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSettingsComponent } from './btn-settings.component';

describe('BtnSettingsComponent', () => {
  let component: BtnSettingsComponent;
  let fixture: ComponentFixture<BtnSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
