import { ScreenmodeService } from 'asb-screenmode';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screen-mode';
  isMobile$ = this.sms.isMobile();
  isDesktop$ = this.sms.isDesktop();
  isTablet$ = this.sms.isTablet();

  constructor(private sms: ScreenmodeService) {}
}
