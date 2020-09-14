import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  data;

  constructor(public http: Http,public loadingCtrl: LoadingController) { }

  async callPost(url,data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    const load=await this.loadingCtrl.create({});
    load.present();

    return new Promise((resolve,reject) => {
      this.http.post("http://api.razorpay.com/"+ url,data)
      .pipe(finalize(()=>load.dismiss()))
      .subscribe((res) => {
          resolve(res);  
      },(err)=>{
        reject(err);
      })
    });
  }

  async callGet(url){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let load = await this.loadingCtrl.create({});
    load.present();

    return new Promise((resolve,reject) => {
      this.http.get("http://api.razorpay.com/"+ url)
      .pipe(finalize(()=>load.dismiss()))
      .subscribe((res) => {
          resolve(res);  
      },(err)=>{
        reject(err);
      })
    });
  }

}
