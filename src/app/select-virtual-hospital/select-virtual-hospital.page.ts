import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { SwasthStorageService } from '../storage/swasth-storage.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-select-virtual-hospital',
  templateUrl: './select-virtual-hospital.page.html',
  styleUrls: ['./select-virtual-hospital.page.scss'],
})
export class SelectVirtualHospitalPage implements OnInit {
  docSelectionStatus=false;
  docSuggestionStatus=false;
  docCodeSelectStatus=false;

  selectedSpecListArray:any=[];
  cliniccode:any;
  ptDecodedLogin:any;
  ptDetail:any;
  ptFirstLetter:any;
  docSpecialization:any;

  constructor(private route: ActivatedRoute, private readonly authService: AuthService,private router: Router, private loginAuth: LoginAuthService,
    private swStorage: SwasthStorageService, private dataService: DataService) { 
    /* this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ptDecodedLogin = this.router.getCurrentNavigation().extras.state.user;
        this.authService
        .patientdetail(this.ptDecodedLogin.UID)
        .subscribe(data=>{
          this.ptDetail=data;
          this.ptFirstLetter = this.ptDetail.ptFirstName.charAt(0).toUpperCase();
          console.log("ptdetail",this.ptDetail);
        });
      }
    }); */
  }

  ngOnInit() {
    this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(data=>{
      this.ptDetail = data;
      console.log("ptdetail",this.ptDetail);
      this.ptFirstLetter = this.ptDetail.ptFirstName.charAt(0).toUpperCase();
    });    
    this.getDocSpecialization();
  }

  selectDocList() {
    this.selectedSpecListArray=[];
    this.docSelectionStatus=!this.docSelectionStatus;
    this.docSuggestionStatus=false;
    this.docCodeSelectStatus=false;
  }
  docSuggestion() {
    this.selectedSpecListArray=[];
    this.docSuggestionStatus=!this.docSuggestionStatus;
    this.docSelectionStatus=false;
    this.docCodeSelectStatus=false;
  }
  docCode() {
    this.selectedSpecListArray=[];
    this. docCodeSelectStatus=!this. docCodeSelectStatus;
    this.docSelectionStatus=false;
    this.docSuggestionStatus=false;
  }

  selectSpec(event:any) {
    console.log("select spec", event);
    if (event.detail.checked) {
      if (this.selectedSpecListArray.length>=5) {
        console.log("case >5");
        event.detail.checked=!event.detail.checked;
        alert("You have already selected 5 specialization of doctors");
      }
      else {
        this.selectedSpecListArray.push(event.detail.value);
      }
    }
    else {
      const index = this.selectedSpecListArray.indexOf(event.detail.value);
      if (index > -1) {
        this.selectedSpecListArray.splice(index, 1);
      }
    }
  }

  specArraySearch() {
    if (this.selectedSpecListArray.length<1) {
      alert("Please select atleast 3 specialization of doctors");
    }else if (3-this.selectedSpecListArray.length>=1) {
      alert("Please select "+(3-this.selectedSpecListArray.length)+" more specialization of doctors");
    }
    else {
      let specObj:any = {
        spec: this.selectedSpecListArray
      };
      console.log("case>3 and <5",specObj);
      this.authService
      .getVirtualCircleBySpec(specObj)
      .subscribe(data=>{
        console.log("data",data);
        let circleList:any = data;
        if(circleList.length > 0) {
          /* let navigationExtras: NavigationExtras = {
            state: {
              searchCircleList: circleList,
              ptDetail:this.ptDetail
            }
          }; */
          console.log("clist===>", circleList);
          let sd = {
            searchCircleList: circleList,
            // ptDetail:this.ptDetail
          }
          this.dataService.setData(22,sd);
          this.router.navigateByUrl('search-virtual-hospital/22');
        } else {
          alert("there is no circle in this specialization");
        }
      });
      
    }
  }

  getCircleByCode() {
    if (this.cliniccode!="" && this.cliniccode!=undefined) {
      console.log("circle",this.cliniccode);  
      this.authService
      .getCircleDetailByCode(this.cliniccode)
      .subscribe(data=>{
        let circleDetail:any=[];
        circleDetail=data;
        if (circleDetail.length>=1) {
          console.log("data",data);
          let circleDetail = data;
          let navigationExtras: NavigationExtras = {
            state: {
              circleDocList: circleDetail
            }
          };
          this.router.navigate(['virtual-clinic-detail'], navigationExtras);
          
        } else {
          alert("Enter valid circle code");
        }
      })
    } else {
      alert("Please enter the circle code");
    }
  }

  getDocSpecialization()
  {
    console.log("get");
    this.authService.getDoctorSpecialization()
    .subscribe(data=>{
      console.log("doc spec", data);
      this.docSpecialization=data;
    })
  }

  // search by circle code
  searchCircleDocListByCcode() {
    if(this.cliniccode != "") {
      this.authService.getCircleDocListByCcode(this.cliniccode)
      .subscribe(data=>{
        console.log("response res--", data);
        if(data!=null) {
          let responseRes:any = data;
          // alert("success");
          this.cliniccode = "";
          let cd = {
            circleDocList: responseRes.circleSpecList,
            circledetail: responseRes,
          }
          this.dataService.setData(23,cd);
          this.router.navigateByUrl('virtual-clinic-detail/23');
        } else {
          alert("Enter valid circle code");
        }
      })
    } else {
      alert("Please enter the circle code");
    }
  }

  // Logout
  logout() {
    this.loginAuth.logout();
  }
}
