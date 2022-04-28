import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzinvalasztoComponent } from './szinvalaszto.component';

describe('SzinvalasztoComponent', () => {
  let component: SzinvalasztoComponent;
  let fixture: ComponentFixture<SzinvalasztoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzinvalasztoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzinvalasztoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
