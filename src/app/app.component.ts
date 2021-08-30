import { Component } from '@angular/core';
import data from '../assets/data.json';
import { Options, LabelType } from '@angular-slider/ngx-slider';
// import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = data['cards'];
  featuredCards = data['featured'].map((id)=>{
    return data['cards'][id];
  })
  filteredCards = data['cards'];
  banks = data['banks'];
  isPremium: boolean = false;
  isEasy: boolean = false;
  isTravel: boolean = false;
  isMovie: boolean = false;
  isFuel: boolean = false;
  isShopping: boolean = false;
  isFood: boolean = false;
  selectedBanks:number[]=[];
  toShow=true;

  onPremium(value: boolean) {
    this.isPremium = value;
    this.checkCards();
  }
  onBank(value: number,event: any) {
    // this.isPremium = value;
    console.log(value);
    console.log(event.target.checked);
    if (event.target.checked){
      this.selectedBanks.push(value);
    }else{
      this.selectedBanks.splice(this.selectedBanks.indexOf(value),1)
    }
    this.checkCards();
  }
  onEasy(value: boolean,) {
    this.isEasy = value;
    this.checkCards();
  }
  onTravel(value: boolean) {
    this.isTravel = value;
    this.checkCards();
  }
  onMovie(value: boolean) {
    this.isMovie = value;
    this.checkCards();
  }
  onFuel(value: boolean) {
    this.isFuel = value;
    this.checkCards();
  }
  onFood(value: boolean) {
    this.isFood = value;
    this.checkCards();
  }
  onShopping(value: boolean) {
    this.isShopping = value;
    this.checkCards();
  }

  joiningValue: number = 10000;
  joiningOptions: Options = {
    floor: 0,
    ceil: 10000,
    step: 500,
    showSelectionBar: true
  };
  amcValue: number = 10000;
  amcOptions: Options = {
    floor: 0,
    ceil: 10000,
    step: 500,
    showSelectionBar: true
  };
  loungeValue: number = 0;
  loungeOptions: Options = {
    floor: 0,
    ceil: 10,
    step: 2,
    showSelectionBarEnd: true,
  };
  cbValue: number = 0;
  cbOptions: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showSelectionBarEnd: true,
  };

  searchCard(query:String){
    this.filteredCards = this.cards.filter((elm) => {
      return (elm['bank'].toLowerCase()).includes(query.toLowerCase())
        || (elm['name'].toLowerCase()).includes(query.toLowerCase())
    });
  }

  checkCards() {
    this.filteredCards = this.cards.filter((elm) => {
      return elm['lounge'] >= this.loungeValue
        && elm['cashback'] >= this.cbValue
        && elm['joiningFee'] <= this.joiningValue
        && elm['annualFee'] <= this.amcValue
        && (elm['isPremium'] === this.isPremium || elm['isPremium'])
        && (elm['isEasyApproval'] === this.isEasy || elm['isEasyApproval'])
        && (elm['fuel'] === this.isFuel || elm['fuel'])
        && (elm['movie'] === this.isMovie || elm['movie'])
        && (elm['travel'] === this.isTravel || elm['travel'])
        && (elm['food'] === this.isFood || elm['food'])
        && (elm['shopping'] === this.isShopping || elm['shopping'])
        && (this.selectedBanks.includes(elm['bankId']) || this.selectedBanks.length===0)
    });
    if (this.filteredCards.length===data['cards'].length){
      this.toShow=true;
    }else{
      this.toShow=false
    }
  }

}




