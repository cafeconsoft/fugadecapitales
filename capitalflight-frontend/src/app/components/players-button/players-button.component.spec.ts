import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersButtonComponent } from './players-button.component';

describe('PlayersButtonComponent', () => {
  let component: PlayersButtonComponent;
  let fixture: ComponentFixture<PlayersButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
