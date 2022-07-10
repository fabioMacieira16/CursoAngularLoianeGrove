import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngIf',
  templateUrl: './diretiva-ngIf.component.html',
  styleUrls: ['./diretiva-ngIf.component.css']
})
export class DiretivaNgIfComponent implements OnInit {

  curso: string[] = ['Angular 2']

  mostraCursos: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onMostraCurso() {
    this.mostraCursos = !this.mostraCursos;
  }

}
