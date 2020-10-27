import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes-alignment',
  templateUrl: './heroes-alignment.component.html',
  styleUrls: ['./heroes-alignment.component.css'],
})
export class HeroesAlignmentComponent implements OnInit {
  heroes;
  HeroesAlineacion;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  obtenerAlineaciones(alignment: string) {
    this.heroesService.getHeroesAlignment(alignment).subscribe(
      (res) => {
        console.log(res), (this.HeroesAlineacion = res);
      },
      (err) => console.log(err)
    );
  }

  submitData(alignment: HTMLInputElement) {
    this.obtenerAlineaciones(alignment.value.trim().toLowerCase());
    alignment.value = ``;
    return false;
  }
}
