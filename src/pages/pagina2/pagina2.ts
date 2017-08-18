import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goThree(){
    this.navCtrl.push('pageThree');
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave')
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave')
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload')
  }

  ionViewCanEnter(){
    console.log('ionViewCanEnter')
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => { console.log('ionViewCanEnter'); resolve(true);}, 2000);
    })
    return promise;
  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave')
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => { console.log('ionViewCanLeave'); resolve(true);}, 3000);
    })
    return promise;
  }

}
