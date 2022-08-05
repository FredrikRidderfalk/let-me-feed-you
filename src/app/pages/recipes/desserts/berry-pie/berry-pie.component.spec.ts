import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryPieComponent } from './berry-pie.component';

describe('BerryPieComponent', () => {
  let component: BerryPieComponent;
  let fixture: ComponentFixture<BerryPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerryPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
