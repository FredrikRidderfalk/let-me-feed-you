import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanBurgersComponent } from './bean-burgers.component';

describe('BeanBurgersComponent', () => {
  let component: BeanBurgersComponent;
  let fixture: ComponentFixture<BeanBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeanBurgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeanBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
