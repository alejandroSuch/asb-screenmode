import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenmodeComponent } from './screenmode.component';

describe('ScreenmodeComponent', () => {
  let component: ScreenmodeComponent;
  let fixture: ComponentFixture<ScreenmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
