import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPeopleViewComponent } from './admin-people-view.component';

describe('AdminPeopleViewComponent', () => {
  let component: AdminPeopleViewComponent;
  let fixture: ComponentFixture<AdminPeopleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPeopleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPeopleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
