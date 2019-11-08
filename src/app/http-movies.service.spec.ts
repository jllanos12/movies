import { TestBed } from '@angular/core/testing';

import { HttpMoviesService } from './http-movies.service';

describe('HttpMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpMoviesService = TestBed.get(HttpMoviesService);
    expect(service).toBeTruthy();
  });
});
