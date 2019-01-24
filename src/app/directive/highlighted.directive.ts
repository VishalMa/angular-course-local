import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs:'D1'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  appHighlighted:boolean=false;

  @Output('onToggle')
  togglePannel=new EventEmitter();

  constructor() { // console.log('Directive called');
 }

  @HostBinding('class.highlighted')
  get applyClassBinding(){
     return this.appHighlighted;
  }
  @HostBinding('style.border')
  get applyStyleBinding(){
    return this.appHighlighted ? '1px solid black' : 'none' ;
  }
  @HostBinding('attr.disabled')
  get applyAttributeBinding(){
     return true;
  }

  @HostListener('mouseover',['$event'])
  onMouserOver($event){
   // console.log($event );
    this.appHighlighted=true;
    this.togglePannel.emit(this.appHighlighted);
  }
  @HostListener('mouseleave')
  onMouserLeave(){
  //  console.log('OnMouse Over');
    this.appHighlighted=false;
    this.togglePannel.emit(this.appHighlighted);
  }

  toggle(){
    this.appHighlighted=!this.appHighlighted;
    this.togglePannel.emit(this.appHighlighted);
    console.log('toggle !!!!!!');
  }
}
