import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IncantesimiComponent } from './incantesimi/incantesimi.component';
import { ClassiComponent } from './classi/classi.component';
import { SingoleClassiComponent } from './singole-classi/singole-classi.component';
import { HttpClientModule } from '@angular/common/http';
import { CaratteristicheComponent } from './caratteristiche/caratteristiche.component';
import { LoginComponent } from './login/login.component';
import { SingoleCaratteristicheComponent } from './singole-caratteristiche/singole-caratteristiche.component';
import { AllSpellsComponent } from './all-spells/all-spells.component';
import { SingleSpellsComponent } from './single-spells/single-spells.component';
import { RazzeComponent } from './razze/razze.component';
import { SingolaRazzaComponent } from './singola-razza/singola-razza.component';

const LISTA_PAGINE = [
  { path: 'classi', component:  ClassiComponent},
  { path: 'caratteristiche', component:  CaratteristicheComponent},
  { path: 'incantesimi', component:  IncantesimiComponent},
  { path: 'razze', component:  RazzeComponent},
]

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(LISTA_PAGINE), HttpClientModule,],
  declarations: [AppComponent, CaratteristicheComponent,IncantesimiComponent, ClassiComponent, SingoleClassiComponent, LoginComponent,SingoleCaratteristicheComponent, AllSpellsComponent, SingleSpellsComponent, RazzeComponent, SingolaRazzaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
