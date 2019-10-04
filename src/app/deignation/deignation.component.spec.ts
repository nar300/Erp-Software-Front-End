import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeignationComponent } from './deignation.component';

describe('DeignationComponent', () => {
  let component: DeignationComponent;
  let fixture: ComponentFixture<DeignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
