import { Component, OnInit } from '@angular/core';

class ExerciseSummary {
	public name: string;
	public primaryMuscleGroup: string;

	constructor(_name, _primaryMuscleGroup)
	{
		this.name = _name;
		this.primaryMuscleGroup = _primaryMuscleGroup;
	}
}

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit 
{
  	public exercises: Array<ExerciseSummary>;

  	constructor() 
  	{
		this.exercises = new Array<ExerciseSummary>();
  	} 

  	ngOnInit() 
  	{
		this.exercises.push(new ExerciseSummary("push up", "back"));
		this.exercises.push(new ExerciseSummary("push up", "back"));
		this.exercises.push(new ExerciseSummary("push up", "back"));
		this.exercises.push(new ExerciseSummary("push up", "back"));
		this.exercises.push(new ExerciseSummary("push up", "back"));
  	}

}
