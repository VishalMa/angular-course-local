import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]'
})
export class NgxUnlessDirective {

  constructor(private templateRef:TemplateRef<any> , private viewContainerRef:ViewContainerRef) { }

  @Input()
  set appNgxUnless(condition:boolean){
    if(condition){
      console.log('Condition !!!!' + condition);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      console.log('Not Condition !!!!' + condition);
      this.viewContainerRef.clear();
    }
  }

}
