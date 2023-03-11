import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilsiPastaComponent } from './silsi-pasta.component';

describe('SilsiPastaComponent', () => {
  let component: SilsiPastaComponent;
  let fixture: ComponentFixture<SilsiPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilsiPastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilsiPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
