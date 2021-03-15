import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import {  DataService } from '../services/data.service';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.css']
})
export class CompartirComponent implements OnInit {
  
  postList: any;
  muestraEdos: boolean=false;
  muestraUsers: boolean=false;
  term: string;


  constructor( private router: Router, private dataService: DataService) { }


  getData(){
    this.muestraEdos = true;
    this.muestraUsers=false;
  	this.dataService.getEstados().subscribe((data)=>{
            this.postList = data;
            console.log("datos : ", data)
        });
  }

  getUsers(){
  	 this.muestraEdos=false;
  	 this.muestraUsers=true;
	 this.dataService.getUsers().subscribe((data)=>{
            this.postList = data;
            console.log("datos : ", data)
        });	  	 

  }

  

  ngOnInit() {
  	
  }

}
