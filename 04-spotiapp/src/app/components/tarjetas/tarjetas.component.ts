import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private v_router: Router ) { }

  verArtista(item: any){
    let artistaId: any;

    if(item.type === 'artist'){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }

    console.log(artistaId);
    this.v_router.navigate(['/artist', artistaId]);

  }

}
