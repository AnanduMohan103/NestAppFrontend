import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployComponent } from './addemploy.component';

describe('AddemployComponent', () => {
  let component: AddemployComponent;
  let fixture: ComponentFixture<AddemployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
