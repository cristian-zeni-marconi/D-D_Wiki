import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';

@Component({
  selector: 'app-singola-razza',
  templateUrl: './singola-razza.component.html',
  styleUrls: ['./singola-razza.component.css']
})
export class SingolaRazzaComponent implements OnInit {

  img: ListaClassi[] = [];
  @Input() dati: any;
  @Input() pass: boolean;
  @Input() razza: string = "";
  @Input() nome: string;

  constructor() {
    this.pass = false;
    
    for (let i = 0; i < 11; i++) {
      this.img[i] = new ListaClassi();
    }
  }

  ngOnInit(){

  }

}