import { TestBed, inject } from '@angular/core/testing';

import { TitleService } from './page.service';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageService]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));
});
