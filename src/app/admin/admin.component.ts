import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	loginForm: FormGroup;
	errorMessage: string;
	user: any;

  constructor(public fb: FormBuilder, private router: Router,
  	 private authService: AuthenticationService,
  	 private afAuth: AngularFireAuth) { 

  	this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
      } else {
        this.user = '';
      }
    })

  }

	signIn() {
		let email = this.loginForm.value.email;
    	let password = this.loginForm.value.password;
		this.authService.loginUser(email, password) 
		.then(res => {
        console.log(res);
        this.errorMessage = "";
        //this.router.navigate(['home']);
      }, err => {
        this.errorMessage = err.message;
        
      })

	}

	logOut(){
		this.authService.SignOut();
		this.router.navigate(['admin']);
	}

    ngOnInit() {
  	  this.reactiveForm()
    }

  	reactiveForm() {
    	this.loginForm = this.fb.group({
   			email: ['', [Validators.required, Validators.email]],
        	password: ['', [Validators.required, Validators.minLength(6)]],
	    })

  	}

  	get email() {
    	return this.loginForm.get("email");
  	}

  	get password() {
    	return this.loginForm.get("password");
  	}

}
