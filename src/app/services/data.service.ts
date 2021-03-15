import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	baseUrl : string = "http://caribesoft.net/galenia/get_edos.php";
	secondUrl : string = "https://api.mocki.io/v1/";

  constructor(private httpClient : HttpClient) { 
  		console.log("Hello DataService");
  }

  getEstados() { 
       return this.httpClient.get(this.baseUrl + '/get_edos.php');
  }

  getUsers() { 
       return this.httpClient.get(this.secondUrl + 'b043df5a');
  }

}
