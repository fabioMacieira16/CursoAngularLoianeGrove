import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImageOne = 'http://lorempixel.com.br/500/400/?1';
  urlImage = 'http://lorempixel.com.br/500/400/?2';

  nomeDoCurso: string = 'Angular';

  getvalor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
