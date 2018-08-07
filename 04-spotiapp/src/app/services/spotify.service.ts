import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  canciones: any[] = [];
  constructor(private http:HttpClient) {
    console.log("servicio listo");
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCHR_Go8X8eE77UkLG3EvcTGdeBNmkVpb-f1PoaIIe0_i24VNw5yLqrJvvFAdbV2yRG49otZzKkTr8vavg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(termino : string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCHR_Go8X8eE77UkLG3EvcTGdeBNmkVpb-f1PoaIIe0_i24VNw5yLqrJvvFAdbV2yRG49otZzKkTr8vavg'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
