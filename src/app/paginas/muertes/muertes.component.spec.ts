import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuertesComponent } from './muertes.component';

describe('MuertesComponent', () => {
  let component: MuertesComponent;
  let fixture: ComponentFixture<MuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuertesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
