import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1headingComponent } from './h1heading.component';

describe('H1headingComponent', () => {
  let component: H1headingComponent;
  let fixture: ComponentFixture<H1headingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1headingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1headingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
