import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { TungguPage } from '../tunggu/tunggu';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-peraturan',
  templateUrl: 'peraturan.html',
})
export class PeraturanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public app: App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeraturanPage');
  }

  pinjam(){
    if(this.cucumber==true){
    this.app.getRootNav().push(TungguPage);
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Harap centang checkbox ketersediaan',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  cucumber: boolean;

  updateCucumber() {
    console.log('Cucumbers new state:' + this.cucumber);
  }
}
