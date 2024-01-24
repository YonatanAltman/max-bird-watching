import {Component} from "@angular/core";


@Component({
  selector:'ui-button',
  template:'<button>Click</button>'
})
export class ButtonComponent {
  constructor() {
    console.log('Hey this is the constructor of button')
  }
}
