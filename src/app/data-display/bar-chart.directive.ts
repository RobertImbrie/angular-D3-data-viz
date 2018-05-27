import { Directive, Input, HostBinding, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Data } from '../data.model';
import { D3Service, D3 } from 'd3-ng2-service';

@Directive({
  selector: '[appBarChart]'
})
export class BarChartDirective implements OnInit {
  @Input() data: number[];
  private d3: D3;
  private parentNativeElement: any;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private d3service: D3Service
  ) {
    this.d3 = d3service.getD3();
    this.parentNativeElement = elementRef.nativeElement;
  }

  ngOnInit(): void {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);
    }
  }
}
