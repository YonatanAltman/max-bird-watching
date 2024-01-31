import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TableModule} from "./table/table.module";
import {ButtonModule} from "./button/button.module";
import {BirdCardModule} from "./bird-card/bird-card.module";
import {AboutModule} from "./about/about.module";
import {HeaderComponent} from "./header/header.component";
import {AppLink, HeaderState} from "./header/header.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, TableModule, ButtonModule, BirdCardModule, NgIf,
    AboutModule, RouterLink, HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'bird-project';

  items: AppLink[] = [
    {link: 'home', label: 'Home'},
    {link: 'about', label: 'About'},
    {link: 'report', label: 'Yonatan'},
    {link: '404', label: '404'},
  ]
  items2: AppLink[] = [
    {link: 'golan', label: 'Riki'},
    {link: 'home', label: 'Golan'},
    {link: 'report', label: 'Yuri'},
    {link: 'about', label: 'David'},

  ]

  title2 = 'Yonatan';

  onStateChanged(component: string, $event: HeaderState) {
    console.log(component, $event);
  }
}
