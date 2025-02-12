import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent2Component } from './sample-component2.component';

describe('SampleComponent2Component', () => {
  let component: SampleComponent2Component;
  let fixture: ComponentFixture<SampleComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
