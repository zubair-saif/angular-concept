import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.appHighlight);
  }
  
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }
  
  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
