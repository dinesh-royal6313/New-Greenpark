import { Component, Input } from '@angular/core';
import {IconDefinition, faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  faStar = faStar;  
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;
  stars: IconDefinition[] =[];
  private _score: number =0;
  // @Input()
  // set score(val: number){
  //   // Reset stars array
  //   this.stars = [];
  //   this._score = val>5?5:val;
  //   const solidStarCount: number =Math.floor(this._score);
  //   for(let i: number =0; i< solidStarCount;i++){
  //     this.stars.push(faStar);
  //   }

  //   if(this._score - solidStarCount >0&& this._score - solidStarCount <1){
  //     this.stars.push(faStarHalfStroke);
  //   }
  //   for(let i:number = this.stars.length;i<5;i++){
  //     // this.stars.push(faStarEmpty);
  //   }
  // }
//   @Input()
// set score(val: number) {
//   console.log('Setting score to:', val);
//   // Reset stars array
//   this.stars = []; 
  
//   // Cap the score at 5
//   this._score = val > 5 ? 5 : val;
  
//   // Calculate solid stars
//   const solidStarCount: number = Math.floor(this._score);
//   for (let i = 0; i < solidStarCount; i++) {
//     this.stars.push(this.faStar);
//   }
  
//   // Add half star if applicable
//   if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
//     this.stars.push(this.faStarHalfStroke);
//   }
  
//   // Fill the remaining with empty stars
//   for (let i = this.stars.length; i < 5; i++) {
//     this.stars.push(this.faStarEmpty);
//   }
// }

}
