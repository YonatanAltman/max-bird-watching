import {Component} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TableModule} from "./table/table.module";
import {ButtonModule} from "./button/button.module";
import {BirdCardModule} from "./bird-card/bird-card.module";
import {AboutModule} from "./about/about.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule, ButtonModule, BirdCardModule, NgIf,
    AboutModule, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  state: 'show' | 'hide' = 'hide';
  title = 'bird-project';
  linkPreFix = 'Go to:';
  items = [
    {link: 'home', label: 'Home'},
    {link: 'about', label: 'About'},
    {link: 'reports', label: 'Yonatan'},
    {link: '404', label: '404'},
  ]


  toggleState() {
    // if(this.state === 'show'){
    //   this.state = 'hide';
    // }else {
    //   this.state = 'show';
    // }

    this.state =
      this.state === 'show' ? 'hide' : 'show';
  }
}
