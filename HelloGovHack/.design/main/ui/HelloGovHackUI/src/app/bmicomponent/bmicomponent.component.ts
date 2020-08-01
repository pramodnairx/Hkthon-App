import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmicomponent',
  templateUrl: './bmicomponent.component.html',
  styleUrls: ['./bmicomponent.component.css']
})
export class BMIComponentComponent implements OnInit {

  bmiObject: bmi;

  constructor(private bmiService: BMIServiceService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
	  this.bmiService.calculateBMI(this.bmiObject).subscribe(result => this.refreshBMI());
  }
  
  refreshBMI() {
	  this.router.navigate(['/']);
  }

}
