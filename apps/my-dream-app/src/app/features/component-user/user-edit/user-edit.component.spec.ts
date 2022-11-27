import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {
  let component: AEditComponent;
  let fixture: ComponentFixture<AEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
