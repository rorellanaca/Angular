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
      'Authorization': 'Bearer BQDMQD5CjwB3KdGDdn9Txhbj43tJAgOIyv3BudzuL69Nk2jFinzQkGP5oA8QQWf8jeGu8exiwGzLrR7hUXQ'
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
