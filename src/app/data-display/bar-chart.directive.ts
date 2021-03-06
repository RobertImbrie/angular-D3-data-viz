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
    let   d3ParentElement: Selection<any, any, any, any>;
    const d3        = this.d3;
    const margin    = this.margin;
    const barHeight = this.height / this.data.length - this.margin;
    const x         = d3.scaleLinear()
      .domain([0, d3.max(this.data,
        function(d) { return d.value; })])
      .range([0, this.width]);

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement)
        .attr('width', this.width)
        .attr('height', this.height)
        .selectAll('g')
          .data(this.data)
        .enter().append('g')
          .attr('transform', function(d, i) { return 'translate(0,' + i * (barHeight + margin) + ')'; });

      d3ParentElement.append('rect')
        .attr('width', function(d) { return x(d.value); })
        .attr('height', barHeight)
        .attr('fill', this.barColor);

      d3ParentElement.append('text')
        .attr('x', function(d) { return x(d.value) - 20; })
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .attr('color', this.textColor)
        .text(function(d) { return d.value; });
    }
  }
}
