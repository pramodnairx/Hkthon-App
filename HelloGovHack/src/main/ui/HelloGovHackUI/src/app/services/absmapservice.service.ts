import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lga } from '../model/lga.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsmapserviceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
	this.usersUrl = 'http://localhost:8080/getLGACoordinates';  
  }

  public getLGACoordinates(): Observable<Object> {
	  const myHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
	  console.log(this.usersUrl);
	  return this.http.get(this.usersUrl, {headers: myHeaders});
  }  
  
}
