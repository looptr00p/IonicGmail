import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correoActual;


  constructor(public navCtrl: NavController,  
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.correoActual = navParams.data;
  }

  mostrarModal(tipo:string){
    let modal = this.modalCtrl
                    .create(NuevocorreoPage, {tipo:tipo,
                                              correo: this.correoActual});
    modal.present();
  }

}
