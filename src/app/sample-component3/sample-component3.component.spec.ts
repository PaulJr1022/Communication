import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent3Component } from './sample-component3.component';

describe('SampleComponent3Component', () => {
  let component: SampleComponent3Component;
  let fixture: ComponentFixture<SampleComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleComponent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
