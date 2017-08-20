import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, Loading, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {
  showView: boolean;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
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
    let showConfirm = this.showConfirm();

    let promise = new Promise((resolve, reject) => {
      showConfirm.onDidDismiss(() => resolve(this.showView));
    })
    return promise;
  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave')
    let loading = this.showLoading();
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => { loading.dismiss(); resolve(true);}, 2000);
    })
    return promise;
  }

  showLoading():Loading {
    let loader = this.loadingCtrl.create({
      content: 'cargando...'
    });
    loader.present();
    return loader;
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Seguro?',
      message: 'Si te vas eres un pato',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.showView = false;
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.showView = true;
          }
        }
      ]
    });
    confirm.present();
    return confirm;
  }
}
