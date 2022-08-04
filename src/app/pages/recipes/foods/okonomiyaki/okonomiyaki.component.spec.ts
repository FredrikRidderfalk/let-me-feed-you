import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkonomiyakiComponent } from './okonomiyaki.component';

describe('OkonomiyakiComponent', () => {
  let component: OkonomiyakiComponent;
  let fixture: ComponentFixture<OkonomiyakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkonomiyakiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkonomiyakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
