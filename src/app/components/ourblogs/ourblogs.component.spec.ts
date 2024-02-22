import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurblogsComponent } from './ourblogs.component';

describe('OurblogsComponent', () => {
  let component: OurblogsComponent;
  let fixture: ComponentFixture<OurblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
