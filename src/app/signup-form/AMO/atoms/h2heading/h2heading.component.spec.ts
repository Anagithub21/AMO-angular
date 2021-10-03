import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2headingComponent } from './h2heading.component';

describe('H2headingComponent', () => {
  let component: H2headingComponent;
  let fixture: ComponentFixture<H2headingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2headingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2headingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
