import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error:boolean;
  mesanjeError: string;

  constructor(private sportify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.sportify.getNewReleases()
     .subscribe((data: any) =>  {
       this.nuevasCanciones = data;
       this.loading = false;
     },(errorServicio) =>{

       this.loading = false;
       this.error = true;
       this.mesanjeError = errorServicio.error.error.message;
     });
  }

  ngOnInit() {
  }

}
