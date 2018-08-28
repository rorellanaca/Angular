import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private sportify: SpotifyService) {
  }

  buscar(termino: string) {
      if(termino.length > 0){
      this.loading = true;
      this.sportify.getArtist(termino)
       .subscribe((data: any) => {
         this.artistas = data;
         this.loading = false;
       });
    }else{
      this.artistas = [];
    }
  }

}
