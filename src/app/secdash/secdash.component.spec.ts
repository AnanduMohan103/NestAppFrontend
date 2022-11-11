import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecdashComponent } from './secdash.component';

describe('SecdashComponent', () => {
  let component: SecdashComponent;
  let fixture: ComponentFixture<SecdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
