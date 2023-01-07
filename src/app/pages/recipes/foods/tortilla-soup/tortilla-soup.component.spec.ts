import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortillaSoupComponent } from './tortilla-soup.component';

describe('TortillaSoupComponent', () => {
  let component: TortillaSoupComponent;
  let fixture: ComponentFixture<TortillaSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortillaSoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortillaSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
