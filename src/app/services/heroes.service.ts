import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = '';
  constructor(private httpClient: HttpClient) {
    this.url = `http://localhost:3000/obtenerHeroes`;
  }

  getHeroes() {
    return this.httpClient.get(this.url);
  }

  getHeroesAlignment(alignment:string){
    return this.httpClient.get(`${this.url}/${alignment}`);
  }
}
