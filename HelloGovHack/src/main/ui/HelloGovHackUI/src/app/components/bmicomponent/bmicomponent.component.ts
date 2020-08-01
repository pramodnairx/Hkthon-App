import { Component, OnInit } from '@angular/core';
import { BMI } from '../../model/bmi';
import { BMIServiceService } from '../../services/bmiservice.service';


@Component({
  selector: 'app-bmicomponent',
  templateUrl: './bmicomponent.component.html',
  styleUrls: ['./bmicomponent.component.css']
})

export class BMIComponentComponent implements OnInit {

  bmiObject: BMI;

  constructor(private bmiService: BMIServiceService) { }

  ngOnInit(): void {
	  this.bmiObject = {height: '', weight: '', bmi: ''};
  }
  
  onSubmit() {
	  //this.bmiService.calculateBMI(this.bmiObject).subscribe(result => this.refreshBMI());
	  this.bmiService.calculateBMI(this.bmiObject).subscribe(result => {this.bmiObject.bmi = result.bmi});
  }
  
  refreshBMI() {
	  console.log("BMI value: " + this.bmiObject.bmi);
	  //this.router.navigate(['/']);
  }

}
