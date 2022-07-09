import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'My project and angular ';

  valor: number = 5;

  deletarCiclo: boolean = false;

  MudarValor() {
    this.valor ++;
  }


  destruirCiclor() {
    this.deletarCiclo = true;
  }
}
