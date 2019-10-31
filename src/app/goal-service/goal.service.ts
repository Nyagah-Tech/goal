import { Injectable } from '@angular/core';
import { Goal} from '../goal';
import { Goals } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
 goals=new Goals;
  dagoals (){
    return this.goals.dagoals()
  }
  getGoal(id){
    for (let goal of this.goals.dagoals()){
      if (goal.id==id){
        return goal;
      }
    }
  }
  constructor() { }
}
