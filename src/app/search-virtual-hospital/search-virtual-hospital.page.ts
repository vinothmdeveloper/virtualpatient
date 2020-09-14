import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginAuthService } from '../services/login-auth.service';
import { SwasthStorageService } from '../storage/swasth-storage.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-virtual-hospital',
  templateUrl: './search-virtual-hospital.page.html',
  styleUrls: ['./search-virtual-hospital.page.scss'],
})
export class SearchVirtualHospitalPage implements OnInit {

  circleList:any;
  ptDetail:any;
  ptChatDetail:any;

  constructor(private route: ActivatedRoute, private router: Router,private readonly authService: AuthService,
    private loginAuth: LoginAuthService, private swStorage: SwasthStorageService, private dataService: DataService) { 
    /* this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.circleList = this.router.getCurrentNavigation().extras.state.searchCircleList;
        this.router.getCurrentNavigation().extras.state.ptDetail;
        console.log("circlelist", this.circleList);
        console.log("PtDetails", this.ptDetail);
        if (this.circleList.length<1) {
          // this.noCircleStatus=true;
        }
      }
    }); */
    
  }

  ngOnInit() {
    if (this.route.snapshot.data['svData']) {
      let data = this.route.snapshot.data['svData'];      
      this.swStorage.getStorage(this.loginAuth.LOGINUSER_PROFILE).then(stdata=>{
        this.ptDetail = stdata;
        this.circleList = data.searchCircleList;
        console.log("patient detail==>", this.ptDetail);
        console.log("Circle list==>", this.circleList);
      });
      
    }
  }

  showCircleDetail(circledetail:any){
    console.log("circledetails", circledetail);
    let cd = {
      circleDocList: circledetail.circleSpecList,
      circledetail: circledetail,
      // ptdetail: this.ptDetail
    }
    this.dataService.setData(23,cd);
    this.router.navigateByUrl('virtual-clinic-detail/23');
  }


  logout() {
    this.loginAuth.logout();
  }
}
