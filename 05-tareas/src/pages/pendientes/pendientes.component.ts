import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';



@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {

  constructor(public tareasService: TareasService,
              private navCtrl: NavController,
              private alertCtrl: AlertController){

  }

  listaSeleccionada(lista: Lista){
      console.log(lista);
  }

  agregarLista(){
      const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        placeholder:'Nombre de la lista'
      }],
      buttons: [{
        text:'Cancelar'},
        {
          text: 'Agregar',
          handler:data =>{
            if(data.titulo.length === 0){
              return;
            }else{
              this.navCtrl.push( AgregarPage,{
                titulo: data.titulo
              });
            }
          }
        }
      ]
    });

    alerta.present();
  }

}
