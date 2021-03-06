import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterViewChecked, OnDestroy {

   @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDistroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
