import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackNoodlesComponent } from './crack-noodles.component';

describe('CrackNoodlesComponent', () => {
  let component: CrackNoodlesComponent;
  let fixture: ComponentFixture<CrackNoodlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrackNoodlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrackNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
