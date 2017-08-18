import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { SettingsProvider } from './../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private settingsProvider: SettingsProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.settingsProvider.loadStorage()
          .then(() => {
            if(this.settingsProvider.setting.showTutoria){
              this.rootPage = 'IntroPage';
            }else{
              this.rootPage = HomePage;
            }

            statusBar.styleDefault();
            splashScreen.hide();
          });
    });
  }
}

