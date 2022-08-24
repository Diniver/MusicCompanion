import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsortComponent } from './btnsort.component';

describe('BtnsortComponent', () => {
  let component: BtnsortComponent;
  let fixture: ComponentFixture<BtnsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnsortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
