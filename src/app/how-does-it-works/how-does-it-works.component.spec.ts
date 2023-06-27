import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoesItWorksComponent } from './how-does-it-works.component';

describe('HowDoesItWorksComponent', () => {
  let component: HowDoesItWorksComponent;
  let fixture: ComponentFixture<HowDoesItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDoesItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoesItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
