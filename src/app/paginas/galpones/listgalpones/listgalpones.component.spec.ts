import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgalponesComponent } from './listgalpones.component';

describe('ListgalponesComponent', () => {
  let component: ListgalponesComponent;
  let fixture: ComponentFixture<ListgalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListgalponesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListgalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
