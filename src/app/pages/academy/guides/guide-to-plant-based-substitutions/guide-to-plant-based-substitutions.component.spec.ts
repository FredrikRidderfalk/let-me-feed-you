import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideToPlantBasedSubstitutionsComponent } from './guide-to-plant-based-substitutions.component';

describe('GuideToPlantBasedSubstitutionsComponent', () => {
  let component: GuideToPlantBasedSubstitutionsComponent;
  let fixture: ComponentFixture<GuideToPlantBasedSubstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideToPlantBasedSubstitutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideToPlantBasedSubstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
