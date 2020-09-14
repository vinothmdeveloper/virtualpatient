import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { LoginAuthService } from '../services/login-auth.service';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginAuth: LoginAuthService, private router: Router, private alertCtrl: AlertController) {}
  
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.loginAuth.user.pipe(
      take(1),
      map(user => {
        console.log("in canactivate", user);
        if(!user) {
          this.alertCtrl.create({
            header: "Unauthorized",
            message: "You are not allowed to access this page",
            buttons: ['ok']
          }).then(alert => alert.present());
          this.router.navigateByUrl('login');
          //this.router.navigateByUrl('/');
          return false;
          
        } else {
          return true;
          
        }
      })
    )
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Observable<boolean> | Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.loginAuth.user.pipe(
  //       take(1),
  //       map(user=>{
  //         if (user) {
  //           resolve(true);
  //         } else {
  //           console.log('User is not logged in');
  //           this.router.navigate(['/login']);
  //           resolve(false);
  //         }
  //       })
  //     )
  //   });
  // }
}
