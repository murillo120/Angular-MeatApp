import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcustomComponent } from './inputcustom.component';

describe('InputcustomComponent', () => {
  let component: InputcustomComponent;
  let fixture: ComponentFixture<InputcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
