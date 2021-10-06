import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormorganismComponent } from './formorganism.component';

describe('Org1Component', () => {
  let component: FormorganismComponent;
  let fixture: ComponentFixture<FormorganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormorganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormorganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
