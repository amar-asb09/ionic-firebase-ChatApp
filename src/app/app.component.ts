import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: 'AIzaSyBjfARGiosJmLTrO-xsyPAEIatv40KAsgM',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'https://ionicchatapp-55ca6.firebaseio.com/',
  projectId: 'ionicchatapp-55ca6',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

