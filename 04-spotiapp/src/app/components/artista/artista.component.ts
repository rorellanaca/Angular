import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent{

  artista: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService
  ) {

    this.loading = true;
    this.router.params.subscribe(params=>{
      this.getartista(params['id']);

    });
  }

  getartista(id: string){
    this.spotify.getArtist(id)
      .subscribe(data => {
          this.artista = data;
          this.loading = false;
      });

  }

}
