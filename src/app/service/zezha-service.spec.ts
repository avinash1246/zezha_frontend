import { TestBed } from '@angular/core/testing';
import { ZezhaService } from './zezha-service';

describe('ZezhaService', () => {
  let service: ZezhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZezhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
