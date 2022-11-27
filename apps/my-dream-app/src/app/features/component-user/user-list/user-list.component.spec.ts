import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UListComponent;
  let fixture: ComponentFixture<UListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
