import {Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';


@Injectable()
export class ToastProvider{
  constructor(public toastCtrl:ToastController){}

  crearToast(mensaje){
    let toast = this.toastCtrl.create(
      {
        message:mensaje,
        duration: 3000,
        position: 'bottom'
      }
    )
    toast.present();
  }



}