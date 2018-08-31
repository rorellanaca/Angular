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
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService
  ) {

    this.loading = true;
    this.router.params.subscribe(params=>{
      this.getartista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getartista(id: string){
    this.spotify.getArtist(id)
      .subscribe(data => {
          this.artista = data;
          this.loading = false;
      });

  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        this.topTracks = data;
      });
  }

}
