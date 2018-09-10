import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.model';



@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarPage {

  lista: Lista;
  nombreItem: string = '';

  constructor(public tareasService: TareasService,
                private navParams: NavParams){

    const titulo = this.navParams.get('titulo');
    
    if(this.navParams.get('Lista')){
      this.lista = this.navParams.get('Lista');
    }else{
      this.lista = new Lista(titulo);
     this.tareasService.agregarLista(this.lista);
    }
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.tareasService.guardarStorage();

    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem){
    item.completado = !item.completado;
    this.tareasService.guardarStorage();

    const pendientes = this.lista.items.filter(itemData =>{
      return !itemData.completado;
    }).length; 

    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }else{
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.tareasService.guardarStorage();
  }

  borrarItem(i: number){
    this.lista.items.splice(i,1);
    this.tareasService.guardarStorage();
  }

}
