import { TestBed } from '@angular/core/testing';

import { Component3Service } from './component3.service';

describe('Component3Service', () => {
  let service: Component3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Component3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
