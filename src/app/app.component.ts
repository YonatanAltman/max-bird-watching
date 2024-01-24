import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TableModule} from "./table/table.module";
import {ButtonModule} from "./button/button.module";
import {BirdCardModule} from "./bird-card/bird-card.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule, ButtonModule, BirdCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'bird-project';
}
