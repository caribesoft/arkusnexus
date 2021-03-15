import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from  "@angular/router";


@Injectable({
  providedIn: 'root'
})
  export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth, public  router:  Router) { }

  
  
    loginUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }


  resetPassword(email: string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  SignOut() {
      this.afAuth
      .signOut();
  }

}
