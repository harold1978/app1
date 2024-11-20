import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalponesComponent } from './galpones.component';

describe('GalponesComponent', () => {
  let component: GalponesComponent;
  let fixture: ComponentFixture<GalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalponesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
