import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLaunchComponent } from './next-launch.component';

describe('NextLaunchComponent', () => {
  let component: NextLaunchComponent;
  let fixture: ComponentFixture<NextLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
