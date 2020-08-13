import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbsmapserviceService {

  constructor(private http: HttpClient) { 
	this.usersUrl = 'http://localhost:8080/getLGACoordinates';  
  }

  public getLGACoordinates(): Observable<string> {
	  const myHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
	  console.log(this.usersUrl);
	  return this.http.get(this.usersUrl, {headers: myHeaders});
  }  
  
}
