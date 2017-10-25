import { Component, OnInit, OnChanges,
         SimpleChanges, Input, ViewChild
       } from '@angular/core';
import { AlgoService } from './algo-service';

@Component({
  selector: 'app-algo-form',
  template: `
    <ngx-charts-area-chart-stacked
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-area-chart-stacked>
  `
})
export class AppAlgoFormComponent implements OnChanges {
  @Input() patientValue = Number;
  @Input() currPatientsPerWeek = Number;
  @Input() deltaPatientsPerWeek = Number;
  @Input() desiredPatientsPerWeek = Number;
  multi: any[] = [
    {
      'name': 'Germany',
      'series': [
        {
          'name': '2010',
          'value': 7300000
        },
        {
          'name': '2011',
          'value': 8940000
        }
      ]
    },
    {
      'name': 'USA',
      'series': [
        {
          'name': '2010',
          'value': 7870000
        },
        {
          'name': '2011',
          'value': 8270000
        }
      ]
    },
    {
      'name': 'France',
      'series': [
        {
          'name': '2010',
          'value': 5000002
        },
        {
          'name': '2011',
          'value': 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange');
    console.log(new AlgoService().compute());
    this.multi = new AlgoService().compute();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  patientValue: Number;
  currPatientsPerWeek: Number;
  deltaPatientsPerWeek: Number;
  desiredPatientsPerWeek: Number;
  @ViewChild(AppAlgoFormComponent) childView: AppAlgoFormComponent;

  constructor() {
    this.patientValue = 300;
    this.currPatientsPerWeek = 5;
    this.deltaPatientsPerWeek = 10;
    this.desiredPatientsPerWeek = 3;
  }

}
