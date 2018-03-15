import { Flashlight } from '@ionic-native/flashlight';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {

  }

  turnLight() {
    if (this.flashlight.available()) {
      if (this.flashlight.isSwitchedOn()) {
        this.flashlight.switchOff();
      } else {
        this.flashlight.switchOn();
      }
    }
  }
}
