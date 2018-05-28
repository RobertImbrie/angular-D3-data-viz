import { Directive, Input, HostBinding, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Data } from '../data.model';
import { D3Service, D3 } from 'd3-ng2-service';

@Directive({
  selector: 'svg[appBarChart]'
})
export class BarChartDirective implements OnInit {
  @Input() data: any[];
  @Input() height    = 200;
  @Input() width     = 200;
  @Input() barColor  = 'black';
  @Input() textColor = 'white';
  @Input() margin    = 1;
  @Input() xAxis     = 'X-Axis';
  @Input() yAxis     = 'Y-Axis';

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

  ngOnInit() {
    const d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    console.log(this.data);
    const x = d3.scaleLinear()
      .domain([0, d3.max(this.data)])
      .range([0, this.width]);

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement)
        .selectAll('div')
          .data(this.data)
        .enter().append('div')
          .style('width', function(d) { return x(d.value) + 'px'; })
          .style('height', (this.height / this.data.length - this.margin) + 'px')
          .style('background-color', this.barColor)
          .style('margin', this.margin + 'px')
          .style('padding-right', '10px')
          .style('color', this.textColor)
          .style('text-align', 'right')
          .text(function(d) { return d.value; });
    }
  }
}
