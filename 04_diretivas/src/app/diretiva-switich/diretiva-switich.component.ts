import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-switich',
  templateUrl: './diretiva-switich.component.html',
  styleUrls: ['./diretiva-switich.component.scss']
})
export class DiretivaSwitichComponent implements OnInit {

  aba: string = 'home'

  constructor() { }

  ngOnInit(): void {
  }

}
