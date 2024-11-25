import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmmuertesComponent } from './frmmuertes.component';

describe('FrmmuertesComponent', () => {
  let component: FrmmuertesComponent;
  let fixture: ComponentFixture<FrmmuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmmuertesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmmuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
