import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController, ToastController, AlertController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AuthService } from "../auth.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [DatePipe]
})
export class SignUpComponent implements OnInit {

  pt: any={
    circlePatientProfile:{},
    circlePatientLogin:{}
  }
  public age1:any;
  public ConfirmPassword:any=[];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  CurrentDate:any;
  
  @Input() signUpStatus=true;
  @Output() childStatus=new EventEmitter<boolean>();

  constructor(private readonly authService: AuthService,private readonly loadingController: LoadingController,private readonly toastCtrl: ToastController,
    private readonly alertCtrl: AlertController, private platform: Platform, public datepipe: DatePipe) { 
      this.ConfirmPassword=true;
      this.CurrentDate=new Date();
    }

  ngOnInit() {}

  // signup component to login page
  linkLogin() {
    this.childStatus.emit(false);
    this.signUpStatus=false;
  }

  // new user sign up
  async signup(value: any) {
    let loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Signing up ...'
    });
    await loading.present();
    // console.log(value);
    value.tenantID="1";
    value.createdDateTime=new Date();

    this.pt.circlePatientProfile={
      tenantID: "1",     
      ptFirstName: value.ptFirstName,  
      ptLastName: value.ptLastName,  
      ptAadharNo: value.ptAadharNo,  
      ptMaritalStatus: value.ptMaritalStatus,  
      ptDob: value.ptDob,  
      ptAge: this.age1,  
      ptMobileNo: value.ptMobileNo,  
      ptEmailID: value.ptEmailID,  
      ptBloodGroup: value.ptBloodGroup,  
      ptGender: value.ptGender,  
      ptCountry: value.ptCountry, 
      ptAllergies: value.ptAllergies, 
      ptEmergencyContactName: value.ptEmergencyContactName,  
      ptEmergencyContactNo: value.ptEmergencyContactNo,  
      ptEmergencyEmailID: value.ptEmergencyEmailID,  
      ptEmergencyRelationship: value.ptEmergencyRelationship,
      createdDateTime: new Date(),  
      status: "Active"
    };
    console.log("circle patient", this.pt.circlePatientProfile);
    this.pt.circlePatientLogin={
      tenant_id: "1",
      role_id: "1",
      user_type: "Patient",
      userPassword:value.password,
      created_date_time: new Date()
    };

    // this.pt.addressEntity = {
    //   addressLine1:value.addressline1,
    //   addressLine2:value.addressline2,
    //   city:value.city,
    //   state:value.state,
    //   country:value.ptCountry,
    //   postalCode:value.postalCode,
    //   createdDateTime: new Date(),
    //   status:'Active'
    // }
    // console.log("post value ......"+JSON.stringify(this.pt));
    this.authService
    .circlesignup(this.pt)
    .pipe(finalize(() => loading.dismiss()))
    .subscribe(        
      (jwt) => this.showSuccesToast(jwt),
      err => this.handleError(err)
    );
  }

  // toast controller alert
  private async showSuccesToast(jwt) {
    // console.log("Response Message======"+jwt);
    if (jwt !== 'EXISTS') {      
      let alert = await this.alertCtrl.create({
        header: 'You have successfully registered',
        message: 'You can log in using your registered mobile number',
        buttons: [{
          text: 'OK', 
          handler: () => {              
            this.childStatus.emit(false);
          }
        }]
      });
      await alert.present();
      /*const toast = this.toastCtrl.create({
        message: 'Sign up successful',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();*/
    }    
    else {
      const toast = await this.toastCtrl.create({
        message: 'Username already registered',
        duration: 3000,
        position: 'bottom'
      });
      await toast.present();
      // this.usernameModel.control.setErrors({'usernameTaken': true});
    }
  }

  async handleError(error: any) {
    let message = `Unexpected error occurred`;
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000, 
      position: 'bottom'
    });
    await toast.present();
  }

  // check confirm password match
  checkPassword (value:string,value1:string){
    if(value!=value1)
    {
      this.ConfirmPassword=false;
    }
    else{
      this.ConfirmPassword=true;
    }
  }

  // calculate age of patient
  getAge(dob:Date) {
    //console.log(dob);
    let latest_date =this.datepipe.transform(this.CurrentDate, 'yyyy-MM-dd');
    //console.log("Current Date=="+latest_date);
    let dobdate= new Date(dob);
    let dobdate1= new Date(latest_date);
    // console.log("Current Date=="+dobdate);
    //current_date=Date.now();
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds 
    var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime())/(oneDay)));       
    //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));
    var age=(timeDiff/365);
    this.age1=Math.floor(age);
    /*console.log("Age=="+(timeDiff/365));*/
  }

}
