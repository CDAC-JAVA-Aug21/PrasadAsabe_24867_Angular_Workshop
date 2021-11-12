import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss']
})
export class ChoreListComponent implements OnInit {

  chores: string[] = ["House cleaning","Grocery Shopping", "job", "buy veggies", "cook food"];

  /*chores2 = [
    {day:'yesterday', task:'Empty dishwasher'},
    {day:'yesterday', task:'Start LaunchCode prepwork'},
    {day:'yesterday', task:'Buy groceries'},
    {day:'today', task:'Load dishwasher'},
    {day:'today', task:'Finish LaunchCode prepwork'},
    {day:'today', task:'Buy the groceries you forgot'},
    {day:'tomorrow', task:'Empty dishwasher again'},
    {day:'tomorrow', task:'Play with Launchcode practice code'},
    {day:'tomorrow', task:'Groceries, again'}
  ];*/

  yesterdayChore: string[] = ["Start LaunchCode prepwork"];
  todayChore: string[] = ["pay lightbill"];
  tomorrowChore: string[] = ["Empty dishwasher again", "Groceries, again"];

  chorelength: number = this.yesterdayChore.length + this.todayChore.length + this.tomorrowChore.length;

  doneChore:string[] = ["Empty dishwasher","Finish LaunchCode prepwork","Play with Launchcode practice code", "Buy groceries", "Buy the groceries you forgot","Load dishwasher","pay rent"];
  donechorelength = this.doneChore.length;
  diff = this.donechorelength - this.chorelength;


  constructor() { }

  ngOnInit(): void {
  }

}
