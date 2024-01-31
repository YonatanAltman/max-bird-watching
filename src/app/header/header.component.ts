import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AppLink, HeaderState} from "./header.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  state: HeaderState = 'show';
  linkPreFix = 'Go to:';

  @Input({required: true}) items!: AppLink[];
  @Input() title: string = 'Hey there 🚀';
  @Output() stateChanged = new EventEmitter<HeaderState>;

  toggleState() {
    // if(this.state === 'show'){
    //   this.state = 'hide';
    // }else {
    //   this.state = 'show';
    // }

    this.state =
      this.state === 'show' ? 'hide' : 'show';

    this.stateChanged.emit(this.state);
  }

}
