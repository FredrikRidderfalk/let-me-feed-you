import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrkiskPeberSnapsComponent } from './tyrkisk-peber-snaps.component';

describe('TyrkiskPeberSnapsComponent', () => {
  let component: TyrkiskPeberSnapsComponent;
  let fixture: ComponentFixture<TyrkiskPeberSnapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyrkiskPeberSnapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyrkiskPeberSnapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
