import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  canciones: any[] = [];
  constructor(private http: HttpClient) {
    console.log('servicio listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5x7ilMOHEvm2yb2pG9Onq9TDfLKLqbPzBXutd2ipa93oCktQ3intdtxJ40n8H1votupC2FLPiFTz3_Jo'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
        .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));
  }
}
