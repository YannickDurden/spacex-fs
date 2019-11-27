import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunchesComponent } from './past-launches.component';

describe('PastLaunchesComponent', () => {
  let component: PastLaunchesComponent;
  let fixture: ComponentFixture<PastLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
