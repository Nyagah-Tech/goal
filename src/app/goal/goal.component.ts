import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { $ } from 'protractor';
import { GoalService } from '../goal-service/goal.service';
import { Goals } from '../goals';
import { AlertService } from '../alert-service/alert.service';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { from } from 'rxjs';
import { QuoteRequestService } from '../quote-http/quote-request.service';



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  alertService:AlertService;
  quote:Quote;
  goal: Goal[];
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date (2020,3,14),),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date (2026,3,15)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date (2023,1,14)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date (2050,3,14)),
    new Goal(5,'Solve math homework','Damn Math',new Date (2015,3,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date (2120,3,14)),
  ];
  router: any;
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      
      if(toDelete){
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted")
      }
      
    
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor(goalService:GoalService, alertService:AlertService,  private http:HttpClient,private quoteService:QuoteRequestService) { 
    this.goals= goalService.dagoals()
    this.alertService = alertService;

  }

  ngOnInit() {

    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occured")
    })
  }

}