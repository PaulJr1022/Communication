import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent1Component } from './sample-component1.component';

describe('SampleComponent1Component', () => {
  let component: SampleComponent1Component;
  let fixture: ComponentFixture<SampleComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
