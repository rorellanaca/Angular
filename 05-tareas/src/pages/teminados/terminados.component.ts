import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosPage {

  constructor(public tareasService: TareasService,
                private navCtrl: NavController,
                private alertCtrl: AlertController){}

    listaSeleccionada(lista: Lista){
        this.navCtrl.push( AgregarPage,{
            titulo: lista.titulo,
            Lista: lista
        });     
    }

}
