import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideButtonsComponent } from './slide-buttons.component';

describe('SlideButtonsComponent', () => {
  let component: SlideButtonsComponent;
  let fixture: ComponentFixture<SlideButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
