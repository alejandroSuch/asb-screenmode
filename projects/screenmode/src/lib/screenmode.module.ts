import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { ScreenmodeComponent } from './screenmode.component';

@NgModule({
  imports: [FlexLayoutModule],
  declarations: [ScreenmodeComponent],
  exports: [ScreenmodeComponent]
})
export class ScreenmodeModule {}
