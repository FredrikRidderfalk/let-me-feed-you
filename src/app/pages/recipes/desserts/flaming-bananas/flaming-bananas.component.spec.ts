import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamingBananasComponent } from './flaming-bananas.component';

describe('FlamingBananasComponent', () => {
  let component: FlamingBananasComponent;
  let fixture: ComponentFixture<FlamingBananasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlamingBananasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamingBananasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
