import {Component} from '@angular/core';
import {BirdCard, BirdMock} from "./bird-card.interface";

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrl: './bird-card.component.scss'
})
export class BirdCardComponent {
  name = 'yonatan'
  card: BirdCard = BirdMock;


  onImageClicked(event:Event) {
    console.log(event);
    this.name = 'Sorel';
  }

  onAreaClick(name:string){
    this.name = name;
  }

}
