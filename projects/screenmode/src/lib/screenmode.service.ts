import { Injectable } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { map, share, startWith, combineLatest } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenmodeService {
  private screenMode$ = this.media.asObservable().pipe(map((change: MediaChange) => change.mqAlias));

  private isMobile$ = this.screenMode$.pipe(
    startWith('xs'),
    map(alias => ['xs', 'sm'].includes(alias))
  );

  private isTablet$ = this.screenMode$.pipe(
    startWith('xs'),
    map(alias => alias === 'md')
  );

  private isDesktop$ = this.isMobile$.pipe(
    combineLatest(this.isTablet$),
    map(([isMobile, isTablet]) => !isMobile && !isTablet)
  );

  constructor(private media: ObservableMedia) {}

  public isMobile(): Observable<boolean> {
    return this.isMobile$;
  }

  public isTablet(): Observable<boolean> {
    return this.isTablet$;
  }

  public isDesktop(): Observable<boolean> {
    return this.isDesktop$;
  }
}
