import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalponComponent } from './galpon.component';

describe('GalponComponent', () => {
  let component: GalponComponent;
  let fixture: ComponentFixture<GalponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
