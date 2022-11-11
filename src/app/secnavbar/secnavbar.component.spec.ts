import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecnavbarComponent } from './secnavbar.component';

describe('SecnavbarComponent', () => {
  let component: SecnavbarComponent;
  let fixture: ComponentFixture<SecnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
