import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutLinkComponent} from "./about-link/about-link.component";
import {AboutButtonComponent} from './about-button/about-button.component';


@NgModule({
  declarations: [
    AboutComponent, // Page => gets route
    AboutLinkComponent, AboutButtonComponent // Small component => no route
  ],
  imports: [
    CommonModule,
  ]
})
export class AboutModule {
}
