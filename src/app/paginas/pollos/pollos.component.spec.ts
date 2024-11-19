import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollosComponent } from './pollos.component';

describe('PollosComponent', () => {
  let component: PollosComponent;
  let fixture: ComponentFixture<PollosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
