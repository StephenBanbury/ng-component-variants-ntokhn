import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

@Injectable()
export class BreakpointService {
  // We hardcode the breakpoints here for demo purposes
  // You can use CSS Custom Properties to share them between CSS and TypeScript
  readonly breakpoints: Record<Breakpoint, number> = {
    mobile: 0,
    tablet: 600,
    desktop: 960
  };

  getMatchingBreakpoint(): Observable<Breakpoint> {
    const bpNames = Object.keys(this.breakpoints) as Breakpoint[];
    const bpValues = Object.values(this.breakpoints);
    const queries = bpValues.map(bp => `(min-width: ${bp}px)`);
    const matches$ = queries.map(query => {
      const matchMedia = window.matchMedia(query);

      return fromEvent<MediaQueryListEvent>(matchMedia, 'change').pipe(
        map(event => event.matches),
        startWith(matchMedia.matches)
      );
    });

    return combineLatest(matches$).pipe(
      map(matches => bpNames[matches.lastIndexOf(true)])
    );
  }

  getResponsiveValue<T>(values: Record<Breakpoint, T>): Observable<T> {
    return this.getMatchingBreakpoint().pipe(
      map(breakpoint => values[breakpoint])
    );
  }
}
