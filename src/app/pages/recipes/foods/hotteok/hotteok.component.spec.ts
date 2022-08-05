import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotteokComponent } from './hotteok.component';

describe('HotteokComponent', () => {
  let component: HotteokComponent;
  let fixture: ComponentFixture<HotteokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotteokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotteokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
