import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmgalponesComponent } from './frmgalpones.component';

describe('FrmgalponesComponent', () => {
  let component: FrmgalponesComponent;
  let fixture: ComponentFixture<FrmgalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmgalponesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmgalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
