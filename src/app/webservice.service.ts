import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(public http: HttpClient,public loadingCtrl: LoadingController) { }
  async callPost(url,data) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let options = new RequestOptions({ headers: headers });

    let load= await this.loadingCtrl.create({});
    load.present();

    return new Promise((resolve,reject) => {
      this.http.post("http://api.razorpay.com/"+ url,data).subscribe((res) => {
        load.dismiss();
          resolve(res);  
      },(err)=>{
        reject(err);
        load.dismiss()
      })
    });
  }

  async callGet(url){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let options = new RequestOptions({ headers: headers });

    let load= await this.loadingCtrl.create({});
    load.present();

    return new Promise((resolve,reject) => {
      this.http.get("http://api.razorpay.com/"+ url).subscribe((res) => {
        load.dismiss();
          resolve(res);  
      },(err)=>{
        reject(err);
        load.dismiss()
      })
    });
  }
}
