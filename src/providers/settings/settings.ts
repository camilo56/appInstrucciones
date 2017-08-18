import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class SettingsProvider {
  setting = {
    showTutoria: true
  }

  constructor(private storage: Storage, private platform: Platform) {
    console.log('Hello SettingsProvider Provider');
  }

  loadStorage(): Promise<any>{
    let promise = new Promise((resolve, promise) => {
      if(this.platform.is('cordova')){

      }else{
        if(localStorage.getItem('setting')){
          this.setting = JSON.parse(localStorage.getItem('setting'));
        }
        resolve();
      }
    })

    return promise;
  }

  saveStorage(){
    if(this.platform.is('cordova')){

    }else{
      localStorage.setItem('setting', JSON.stringify(this.setting));
    }
  }

}
