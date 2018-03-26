import { TestBed, inject } from '@angular/core/testing';

import { CartLocalService } from './cart-local.service';

describe('CartLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartLocalService]
    });
  });

  it('should be created', inject([CartLocalService], (service: CartLocalService) => {
    expect(service).toBeTruthy();
  }));
});
