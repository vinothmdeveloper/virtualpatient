import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {

  @Input() forgetPasswordStatus=true;
  @Output() childStatus=new EventEmitter<boolean>();

  constructor(private readonly authService: AuthService,private readonly loadingController: LoadingController,private readonly toastCtrl: ToastController) { }

  ngOnInit() {}
  
  // to login page
  login() {
    this.childStatus.emit(false);
    this.forgetPasswordStatus=false;
  }

  async forgot(value: any) {
    let loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Validating UID ...'
    });

    await loading.present();
    this.authService
    .forgotUidCheck(value.user_id)
    .pipe(finalize(() => loading.dismiss()))
    .subscribe(data=>{
    	if(data!=null)
    	{
    		console.log(data);
    	}
    	else
    	{	
    		this.showSuccesToast();
    	}
    });
  }

  private async showSuccesToast() {
    // console.log("Response Message======"+data);      
    const toast = await this.toastCtrl.create({
      message: 'Invalid User ID',
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  logout() {
    this.authService.logout();
  }

}
