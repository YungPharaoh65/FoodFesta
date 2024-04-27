import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpageComponent } from './endpage.component';

describe('EndpageComponent', () => {
  let component: EndpageComponent;
  let fixture: ComponentFixture<EndpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndpageComponent]
    });
    fixture = TestBed.createComponent(EndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
