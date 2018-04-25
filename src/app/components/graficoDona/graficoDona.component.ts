import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'graficoDona',
    templateUrl: './graficoDona.component.html'
})
export class GraficoDonaComponent implements OnInit {

    @Input('chartLabels') doughnutChartLabels:string[] = [];
    @Input('chartData') doughnutChartData:number[] = [];
    @Input('chartType') doughnutChartType:string = '';

    constructor() { }

    ngOnInit(): void { }
}
