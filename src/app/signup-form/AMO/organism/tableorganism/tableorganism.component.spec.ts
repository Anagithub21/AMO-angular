import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableorganismComponent } from './tableorganism.component';

describe('Org2Component', () => {
  let component: TableorganismComponent;
  let fixture: ComponentFixture<TableorganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableorganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableorganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
