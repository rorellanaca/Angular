import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private sportify: SpotifyService) {
    this.sportify.getNewReleases()
     .subscribe((data:any) =>{
       console.log(data.albums.item);
       this.nuevasCanciones = data.albums.items;
     });
  }

  ngOnInit() {
  }

}
