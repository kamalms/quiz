import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';
const config = {
  apiKey: "AIzaSyAhdzeYLNNm43fDwGzgm3jWNKGJh0zFG6w",
  authDomain: "beginning-bac5b.firebaseapp.com",
  databaseURL: "https://beginning-bac5b.firebaseio.com",
  projectId: "beginning-bac5b",
  storageBucket: "",
  messagingSenderId: "978548946469",
  appId: "1:978548946469:web:1a4c62c3ef2dd3b3"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,FCM,
    AngularFirestore,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
