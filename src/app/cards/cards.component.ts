import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  card:any;
  @Input() set cName(cardValue: any) {
    this.card=cardValue;
  }
}
