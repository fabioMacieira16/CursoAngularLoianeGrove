import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef,
              private rendere: Renderer2) {

    //Forma recomendada pelo angular usando rendere2
    this.rendere.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
    console.log(this.rendere);

  }

}
