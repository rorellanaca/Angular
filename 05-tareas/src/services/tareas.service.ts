import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable()
export class TareasService {

    listas: Lista[] = [];
    constructor(){
        this.cargarStorage();
    }

    agregarLista(lista: Lista){
      this.listas.push(lista);
      this.guardarStorage();
    }

    guardarStorage(){
      localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage(){
       if(localStorage.getItem('data')){
         this.listas = JSON.parse(localStorage.getItem('data'));
       }
    }
}
