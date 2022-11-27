import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: ADetailsComponent;
  let fixture: ComponentFixture<ADetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
