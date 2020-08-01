import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bmi } from 'bmi';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BMIServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
	this.usersUrl = 'http://localhost:8080/calculateBMI'	  
  }
  
  public calculateBMI(inputBMIData: bmi): Observable<bmi> {
	  return this.http.post<bmi>(this.usersUrl, inputBMIData);
  }
  
}
