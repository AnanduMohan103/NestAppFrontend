import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallleaveComponent } from './viewallleave.component';

describe('ViewallleaveComponent', () => {
  let component: ViewallleaveComponent;
  let fixture: ComponentFixture<ViewallleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
