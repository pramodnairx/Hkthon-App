import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BMI } from '../model/bmi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BMIServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
	this.usersUrl = 'http://localhost:8080/calculateBMI';  
  }
  
  public calculateBMI(inputBMIData: BMI): Observable<BMI> {
	  const myHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
	  console.log(inputBMIData);
	  console.log(this.usersUrl);
	  return this.http.post<BMI>(this.usersUrl, inputBMIData, {headers: myHeaders});
  }
  
}
