import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzuGenieComponent } from './yuzu-genie.component';

describe('YuzuGenieComponent', () => {
  let component: YuzuGenieComponent;
  let fixture: ComponentFixture<YuzuGenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuzuGenieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuzuGenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
