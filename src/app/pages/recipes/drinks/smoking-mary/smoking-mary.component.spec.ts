import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingMaryComponent } from './smoking-mary.component';

describe('SmokingMaryComponent', () => {
  let component: SmokingMaryComponent;
  let fixture: ComponentFixture<SmokingMaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokingMaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokingMaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
