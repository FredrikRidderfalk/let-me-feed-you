import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideToTofuComponent } from './guide-to-tofu.component';

describe('GuideToTofuComponent', () => {
  let component: GuideToTofuComponent;
  let fixture: ComponentFixture<GuideToTofuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideToTofuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideToTofuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
