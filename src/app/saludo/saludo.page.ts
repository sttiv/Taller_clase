import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {

  public nombreSaludar: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async saludoAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Bienvenido ',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Escribe un nombre'
        },],
      buttons: [
       {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          console.log('Confirm Cancel');
            }
          }, {
            text: 'OK',
            handler: (data) => {
              console.log('Confirm Ok', data);
              this.nombreSaludar = data.txtNombre;
            }
          }
        ]

    });

    await alert.present();
  }



  

}
