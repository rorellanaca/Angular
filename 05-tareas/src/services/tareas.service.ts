import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable()
export class TareasService {

    listas: Lista[] = [];
    constructor(){
      const lista1 = new Lista('Recolectar piedras del infinto');
      const lista2 = new Lista('Herores a vences')

      this.listas.push(lista1,lista2);
    }
}
