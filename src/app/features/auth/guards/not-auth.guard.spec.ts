import { TestBed } from '@angular/core/testing';
import {CanActivateFn, Router} from '@angular/router';
import { NotAuthGuard } from './not-auth.guard';
import {CookieService} from 'ngx-cookie-service';

describe('NotAuthGuard', () => {
  let router: Router;
  let cookieService: CookieService;

  const executeGuard: CanActivateFn = () => {
    const guard = new NotAuthGuard(router, cookieService);
    return TestBed.runInInjectionContext(() => guard.canActivate());
  };

 beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: CookieService, useValue: jasmine.createSpyObj('CookieService', ['check']) }
      ]
    });
    router = TestBed.inject(Router);
    cookieService = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

