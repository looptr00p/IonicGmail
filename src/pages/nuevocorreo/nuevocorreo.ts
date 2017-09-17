import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {ToastProvider } from '../../providers/toast/toast';
import {CorreosProvider } from '../../providers/correos/correos';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {

  tipo: string;
  correo: any;
  nombre: string = 'Nicolás Herrera'
  de: string = 'looptroop@ionicdevs.com'
  para: string = '';
  asunto: string ='';
  nuevoCorreo: string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toasCtrl: ToastProvider,
              public correos: CorreosProvider,
              public storage: Storage) {
      this.tipo = navParams.get('tipo');
      this.correo = navParams.get('correo');

      if(this.tipo == 'Reply' || this.tipo == 'Reply All') {
        this.para = this.correo.direccion;
        this.asunto = 'Re: ' + this.correo.asunto;
      }
      if(this.tipo == 'Forward'){
        this.asunto = 'Re: ' + this.correo.asunto;
      }
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

  enviarCorreo(){
    let correo = {
      nombre:this.nombre,
      de:this.de,
      para: this.para,
      asunto: this.asunto,
      mensaje: this.nuevoCorreo,
      fecha: new Date()
    }

    console.log('Mensaje Enviado');
    console.log('De: ' + correo.nombre + '' + correo.de);
    console.log('Para: ' + correo.para);
    console.log('Asunto: ' + correo.asunto);
    console.log('Mensaje: ' + correo.mensaje);
    console.log('Fecha:  ' + correo.fecha);

    this.correos.enviados.push(correo);
    this.storage.set('correosEnviados', this.correos.enviados)
                .then()
                .catch(error => {console.log(error)})
    this.viewCtrl.dismiss();
    this.toasCtrl.crearToast('Correo Enviado');
  }

}
