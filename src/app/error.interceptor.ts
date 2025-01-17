import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.error('HTTP Error:', error);

      return throwError(
        () => new Error('An error occurred while processing your request.')
      );
    })
  );
};
