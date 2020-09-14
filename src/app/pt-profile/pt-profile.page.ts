import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import {DatePipe} from "@angular/common";
import { Platform, ToastController, AlertController, LoadingController,ModalController,PopoverController } from '@ionic/angular';
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient } from "@angular/common/http";
import {finalize} from 'rxjs/operators';
import { SwasthStorageService } from '../storage/swasth-storage.service';
import { LoginAuthService } from '../services/login-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pt-profile',
  templateUrl: './pt-profile.page.html',
  styleUrls: ['./pt-profile.page.scss'],
})
export class PtProfilePage implements OnInit{
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  aadharPattern = "^((\\+91-?)|0)?[0-9]{13}$";
  edit: any;
  message: string;
  // @ViewChild(Nav) nav; Nav;  
  userID:string;
  userFirstLetter:string;
  public age1:any;

  public userdetail: any= [];
  healthAlertList:any=[];
  alertCount:any;

  patientList: any[] = [] ;
  pf_url:any="";
  ptEmailid:any="";
  ptMobileno:any="";
  ptEmergencyEmailid:any="";
  ptEmergencyContactno:any="";

  profile:any={};
  accountBtn=false;
  userType:any;
  background:any;
  ptAddress:any;
  primaryAccountUID:any;
  notificationStatus:boolean;

  user: string;
  tenantID: string;
  userfirstLetter:string;
  familyMembersDetails:any={};
  primaryUser:any; 
  familymemberId:any;
  newLogin = "";


  constructor(private readonly authService: AuthService, public modalCtrl: ModalController,jwtHelper: JwtHelperService, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private readonly httpClient: HttpClient,public datepipe: DatePipe,
    private readonly alertCtrl: AlertController,public popoverCtrl: PopoverController, private swStorage: SwasthStorageService,
    private loginAuth: LoginAuthService,
    private router: Router) { 

    this.background=authService.site_url+"bg-img-8.jpg";
    this.notificationStatus=true;
    //this.viewHealthAlert();

    /* this.authService
    .authUser
    .subscribe(jwt => {
      if (jwt) {
        const decoded = jwtHelper.decodeToken(jwt);
        this.user = decoded;
        this.userType=decoded.type;
        this.tenantID=decoded.TenantID;
        console.log(this.user); 
        this.primaryUser=decoded.UID;        
        this.familymemberId=decoded.UID;
        console.log("Family Member Id.."+this.familymemberId);       
        this.primaryAccountUID = this.primaryUser;
        if(this.primaryUser==this.userdetail.userID){
          this.accountBtn=true;
        }
        console.log("gggggggggggggggggggg");
        this.authService
        .patientdetail(this.familymemberId)     
        .subscribe(data => {
          console.log("gggggggggggggggggggg",data);
          if(data!==null){    
            this.userdetail=data;
            console.log("Home Page"+ this.userdetail);
            console.log("user_detail====="+JSON.stringify(this.userdetail));
            console.log("user_id===="+this.userdetail.userID);

            this.userFirstLetter=this.userdetail.ptFirstName.charAt(0).toUpperCase();
            this.edit = false;
            this.assignValue();
            if(this.userdetail.ptDob!=null)
            {
              this.getAge(this.userdetail.ptDob);
            }
            else{
              this.age1=this.userdetail.ptAge;
            }
            this.authService
            .getAddressByUser(this.userdetail.userID)
            .subscribe(data=>{
              if(data!=null){
                this.ptAddress=data;
              }
            });       
          }
        });
      }
      else {
        this.user = null;
      }
    }); */
  }
  ngOnInit() {
    // console.log("Pt Profile");
    // this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data=>{
    //   this.userdetail=data;
    //   this.accountBtn=true;
    //   console.log("Home Page"+ this.userdetail);
    //   console.log("user_detail====="+JSON.stringify(this.userdetail));
    //   console.log("user_id===="+this.userdetail.userID);

    //   this.userFirstLetter=this.userdetail.ptFirstName.charAt(0).toUpperCase();
    //   this.edit = false;
    //   this.assignValue();
    //   if(this.userdetail.ptDob!=null)
    //   {
    //     this.getAge(this.userdetail.ptDob);
    //   }
    //   else{
    //     this.age1=this.userdetail.ptAge;
    //   }
    //   this.authService
    //   .getAddressByUser(this.userdetail.userID)
    //   .subscribe(data=>{
    //     if(data!=null){
    //       this.ptAddress=data;
    //     }
    //   });
    // });
  }

  ionViewWillEnter()
  {
    console.log("Pt Profile");
    this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data=>{
      this.userdetail=data;
      this.accountBtn=true;
      console.log("Home Page"+ this.userdetail);
      console.log("user_detail====="+JSON.stringify(this.userdetail));
      console.log("user_id===="+this.userdetail.userID);

      this.userFirstLetter=this.userdetail.ptFirstName.charAt(0).toUpperCase();
      this.edit = false;
      this.assignValue();
      if(this.userdetail.ptDob!=null)
      {
        this.getAge(this.userdetail.ptDob);
      }
      else{
        this.age1=this.userdetail.ptAge;
      }
      this.authService
      .getAddressByUser(this.userdetail.userID)
      .subscribe(data=>{
        if(data!=null){
          this.ptAddress=data;
        }
      });
    });
  }

  toggleEdit() {
    this.edit = !this.edit;
    this.assignValue();
    this.getAge(this.userdetail.ptDob);
  }
  
  assignValue() {
    this.profile = {
      ptID:this.userdetail.ptID,
      tenantID:this.userdetail.tenantID,
      userID: this.userdetail.userID,
      ptFirstName:this.userdetail.ptFirstName,
      ptLastName:this.userdetail.ptLastName,
      ptAge:this.userdetail.ptAge,
      ptAadharNo: this.userdetail.ptAadharNo,
      ptMobileNo: this.userdetail.ptMobileNo,
      ptBloodGroup: this.userdetail.ptBloodGroup,
      ptDob: this.userdetail.ptDob,
      ptEmailID: this.userdetail.ptEmailID,
      ptGender: this.userdetail.ptGender,
      ptCountry: this.userdetail.ptCountry,
      ptAllergies: this.userdetail.ptAllergies,
      ptMaritalStatus:this.userdetail.ptMaritalStatus,
      ptEmergencyContactName: this.userdetail.ptEmergencyContactName,
      ptEmergencyRelationship: this.userdetail.ptEmergencyRelationship,
      ptEmergencyContactNo: this.userdetail.ptEmergencyContactNo,
      ptEmergencyEmailID: this.userdetail.ptEmergencyEmailID,
      updatedDateTime: new Date(),
      updatedByUserID: this.userdetail.userID,
      status: this.userdetail.status
    }
  }

  getAge(dob:Date) {
    let latest_date =this.datepipe.transform(Date(),'yyyy-MM-dd');
    //console.log("Current Date=="+latest_date);
    let dobdate= new Date(dob)
    let dobdate1= new Date(latest_date);
    // console.log("Current Date=="+dobdate);
    //current_date=Date.now();
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds 
    var timeDiff = Math.round(Math.abs((dobdate1.getTime() - dobdate.getTime())/(oneDay)));       
    //var diffDays = Math.round(Math.abs((dobdate.getTime() - current_date.getTime())/(oneDay)));
    var age=(timeDiff/365);
    this.age1=Math.floor(age);
  }

  async update(value: any) {
    let loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: ''
    });

    await loading.present();    
    console.log(this.profile);
    this.authService
    .update(this.profile, this.userdetail.userID)
    .pipe(finalize(() => loading.dismiss()))
    .subscribe(        
      (jwt) => this.showSuccesToast(jwt),
      err => this.handleError(err));
    this.authService
    .addAddress(this.ptAddress)
    .subscribe(data=>{
      if(data!="success"){
        this.authService
        .getAddressByUser(this.userdetail.userID)
        .subscribe(data=>{
          if(data!=null){
            this.ptAddress=data;
          }
        });
      }
    });
  }

  // separateAccount(){
  //   console.log("separate account",this.primaryAccountUID);
  //   const split = this.alertCtrl.create({
  //     title: 'Separate Account',
  //     message: 'Are you sure want to separate the account?',
  //     buttons: [
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //           let popover = this.modalCtrl.create('SeparateAccountPage', {cssClass: 'recp-popover'});
  //           popover.onDidDismiss(data=>{
  //             console.log("data", data);
  //             if(data!=undefined){
  //             let splitaccount:any = data;
  //             let separateAccountObj:any;
  //             separateAccountObj ={
  //               userID: this.profile.userID,
  //               tenant_id: "1",
  //               role_id: "1",
  //               user_type: "Patient",
  //               userPassword:splitaccount.splitAcctPassword,
  //               created_date_time: new Date(),
  //               status:'Active'
  //             }
  //             this.authService
  //             .separateAccount(separateAccountObj,splitaccount.splitAcctMobileNo)
  //             .subscribe(data=>{
  //               console.log("split status", data);
  //               if(data=="success"){
  //                 this.authService
  //                 .patientdetail(this.primaryAccountUID)      
  //                 .subscribe(data => {
  //                   console.log("data",data);
  //                   this.userdetail=data;
  //                   this.userFirstLetter=this.userdetail.ptFirstName;
  //                   this.assignValue();
  //                   if(this.userdetail.ptDob!=null)
  //                   {
  //                     this.getAge(this.userdetail.ptDob);
  //                   }
  //                   else{
  //                     this.age1=this.userdetail.ptAge;
  //                   }
                  
  //                 });
  //                 this.accountBtn=true;
  //                 this.showSuccesToast("split");
  //                 this.authService
  //                 .checkLogin();
  //               }
  //               else {
  //                 this.showSuccesToast("notsplit");
  //               }
  //             });
  //             }
  //           });
  //           popover.present();
  //         }
  //       }
  //     ]
  //   });
  //   split.present();
  // }

  // viewNotifications(myEvent:any) {
  //   //alert("Notifications");
  //   this.alertCount=0;
  //   this.notificationStatus=false;
  //   let popover = this.popoverCtrl.create('ViewhealthalertPage', {data:"Hello"},{ cssClass: 'noti-popover'});
  //   popover.present({
  //     ev: myEvent
  //   });
  //   //this.getNotificationCount(this.userid);
  // }

  viewHealthAlert() {
    this.authService
    .viewHealthAlert()
    .subscribe(data=>{
      this.healthAlertList=data;
      this.alertCount=this.healthAlertList.length;
    });
  }

  // getNotificationCount(userid:any) {
  //   this.authProvider
  //   .getNotifications(userid)
  //   .subscribe(data=>{
  //     console.log("Notifications",data);
  //     this.notifications=data;
  //     if(this.notifications.length!=0)
  //     {
  //       this.notificationStatus=true;
  //     }
  //     else
  //     {
  //       this.notificationStatus=false;
  //     }
  //   });
  // }

  private async showSuccesToast(jwt) {
    console.log("Response Message======"+jwt);
    if (jwt === 'Success') {   
      //change to view mode
      this.edit = false;               
      const toast = await this.toastCtrl.create({
        message: 'Update successful',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    } else if (jwt === 'split') {
      const toast = await this.toastCtrl.create({
        message: 'Account separated successfully',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    } else if (jwt === "notsplit") {
      const toast = await this.toastCtrl.create({
        message: 'Account not separated',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }else {
      const toast = await this.toastCtrl.create({
        message: 'Update failed',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
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
    toast.present();
  }

  addFamilyMember()
  {
    this.router.navigateByUrl('/addfamilymember');
  }

  logout() {
    this.loginAuth.logout();
  }

}
