import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe(
      (res) => {
        (this.heroes = res);
      },
      (err) => console.log(err)
    );
  }
  obtenerMejorHeroe(){
    let mejorHeroe;
    this.heroes.array.forEach(element => {
      console.log(element);
    });
  }
}
