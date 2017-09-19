import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('focus') aoGanharFoco() {
    //console.log(this.elementRef.nativeElement);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') aoPerderFoco() {
    //console.log(this.elementRef.nativeElement);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }

}
