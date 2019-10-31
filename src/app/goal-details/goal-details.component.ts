import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  goal:Goal;
  @Input() goals: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
  }

}
