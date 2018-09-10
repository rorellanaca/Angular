import { Component, Input } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models/lista.model';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent {

    @Input() terminada: boolean = false;

  constructor(public tareasService: TareasService,
    private navCtrl: NavController,
    private alertCtrl: AlertController){}

  listaSeleccionada(lista: Lista){
    this.navCtrl.push( AgregarPage,{
      titulo: lista.titulo,
      Lista: lista
    });     
  }

  
  borrar(lista: Lista){
    this.tareasService.borrarLista(lista);
  }
  
  editar(lista: Lista, slidingItem:ItemSliding){

    slidingItem.close();
    
    const alerta = this.alertCtrl.create({
        title: 'Editar nombre',
        inputs: [{
          name: 'titulo',
          placeholder:'Nombre de la lista',
          value: lista.titulo
        }],
        buttons: [{
          text:'Cancelar'},
          {
            text: 'Guardar',
            handler:data =>{
              if(data.titulo.length === 0){
                return;
              }

              lista.titulo = data.titulo;
              this.tareasService.guardarStorage();
            }
          }
        ]
      });
  
      alerta.present();
  }
}
