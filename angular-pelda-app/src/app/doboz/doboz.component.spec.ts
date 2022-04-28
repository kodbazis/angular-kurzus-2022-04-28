import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobozComponent } from './doboz.component';

describe('DobozComponent', () => {
  let component: DobozComponent;
  let fixture: ComponentFixture<DobozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
