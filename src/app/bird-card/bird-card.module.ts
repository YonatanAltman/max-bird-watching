import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BirdCardComponent} from "./bird-card.component";



@NgModule({
  declarations: [BirdCardComponent],
  exports: [BirdCardComponent],
  imports: [
    CommonModule
  ]
})
export class BirdCardModule { }
