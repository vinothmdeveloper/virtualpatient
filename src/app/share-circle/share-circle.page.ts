import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-share-circle',
  templateUrl: './share-circle.page.html',
  styleUrls: ['./share-circle.page.scss'],
})
export class ShareCirclePage implements OnInit {

  circleObj:any;
  ptDetail:any;
  sendTxt = "";
  docNumber = "";
  whatsappLink = "";

  mobileNumber:any = {
    invalid:false,
    Msg:"",
  }

  sendStatus = false;
  countryCodeList:any;
  countryCode="";
  countryCodeStatus = false;

  constructor(private navParams: NavParams, private popoverCtrl: PopoverController, private clipBoard: Clipboard,
    private authService: AuthService) { }

  ngOnInit() {
    this.circleObj = this.navParams.get('circleObj');
    this.ptDetail = this.navParams.get('ptDetail');
    console.log("share doc detail",this.ptDetail);
    console.log("share circle obj",this.circleObj);
    if(this.ptDetail != undefined) {      
      // this.sendTxt = this.ptDetail.ptFirstName+" "+this.ptDetail.ptLastName+" is inviting you to join their Swasth Circle! Join Name: "+this.circleObj.circleName;
      this.sendTxt = "Get 24/7 care from 5 doctors for your entire family by subscribing (to "+this.circleObj.circleName+") at just Rs 150 per month on Swasth";
      console.log("after check doc detail",this.ptDetail);
    }
    
  }

  copyCodePass() {
    console.log("Circle object--->", this.circleObj);
    // let copyText = "Circle Code :"+this.circleObj.circleCode+" "+"Circle Password :"+this.circleObj.circlePassword;
    alert(this.sendTxt);
    this.clipBoard.copy(this.sendTxt).then(data=>{
      alert("code copied");
    });
  }

  codeShareLink(e) {       

    console.log("sxsxsx iff-----", e);   
    if(e.which < 48 || e.which > 57) {      
      // alert("enter the digits only");      
      e.target.value = "";
      e.key = "";
      this.mobileNumber.invalid = true;
      this.mobileNumber.msg = "Please enter only digits";
      console.log("sxsxsx iff-----", e);
    } else {
      if(e.target.value.length < 10) {
        console.log("mobile length", e.target.value.length);
        this.mobileNumber.invalid = false;
        this.whatsappLink="https://wa.me/"+this.countryCode+this.docNumber+"?text="+this.sendTxt;
        console.log("link--->", this.whatsappLink);
      } else {
        if(e.target.value.length == 10) {
          this.sendStatus = true;
        } else {
          this.sendStatus = false;
        }
        return false;
      }
      
    }
  }

  numberOnly(e) {
    if(e.keyCode == 8 ) {  
      if(e.target.value.length < 10) {
        console.log("number reduce");
        this.sendStatus = false;
      }
    } else if(e.target.value.length == 10) {
      this.sendStatus = true;
    }
  }

  // get mobile country code 
  getCountryCode() {
    this.authService
    .getCountryCodes()
    .subscribe(data=>{
      console.log("country codes--", data);
      this.countryCodeList = data;
    })
  }

  mobileNoChange(e) {
    console.log("sdsdsd",e);
    this.docNumber = e.target.value;
    if(e.target.value.length == 10 && this.countryCode != "") {      
      this.whatsappLink="https://wa.me/"+this.countryCode+this.docNumber+"?text="+this.sendTxt;
      console.log("link--->", this.whatsappLink);
    }
  }

  countryCodeChange() {
    if(this.countryCode != "") {
    
      this.countryCodeStatus = true;
      if(this.countryCode != "" && this.docNumber != "") {      
        this.whatsappLink="https://wa.me/"+this.countryCode+this.docNumber+"?text="+this.sendTxt;
        console.log("link--->", this.whatsappLink);
      }
    } else {
      this.countryCodeStatus = false;
    }
  }
  
  // close popover
  close() {
    this.popoverCtrl.dismiss("Cancel");
  }

}
