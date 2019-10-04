import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationformComponent } from './designationform.component';

describe('DesignationformComponent', () => {
  let component: DesignationformComponent;
  let fixture: ComponentFixture<DesignationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
