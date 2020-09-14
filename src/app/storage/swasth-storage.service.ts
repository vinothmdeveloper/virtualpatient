import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SwasthStorageService {
  
  storageValue:any;

  constructor(private storage: Storage) { }

  setStorage(key:string,value:any){
    this.storage.set(key, value);
  }

  getStorage(key:string){
    /* this.storage.get(key).then((data)=>{
      if(data != null && data != undefined) {
          console.log("storage data", data);
          this.storageValue = data;
      } else {
        this.storageValue = null;
      }       
        
    });
    return this.storageValue; */
    return this.storage.get(key);
  }

  clearStorage(){
    this.storage.clear();
  }

  removeStorage(key:string){
    this.storage.remove(key);
  }

}
