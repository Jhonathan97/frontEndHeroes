import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesAlignmentComponent } from './components/heroes-alignment/heroes-alignment.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'heroesAlineacion',
    component: HeroesAlignmentComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeaderComponent,
    HomeComponent,
    HeroesAlignmentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(rutas)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
