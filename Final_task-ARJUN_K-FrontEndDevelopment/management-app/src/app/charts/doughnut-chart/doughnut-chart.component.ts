import { Component } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexFill, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  constructor(private doughnutchart: AlldataService) { }
  chartdata: any;
  colordata: any[] = [];
  actcount = 0;
  inactcount = 0;
  totalnum: any[] = [];
  labeldata = ['active', 'inactive']

  ngOnInit(): void {

    //Calling API for giveing dynamic data for Chart   
    this.doughnutchart.getdoughchartinfo().subscribe(res => {
      this.chartdata = res;
      for (let i = 0; i < this.chartdata.length; i++) {
        if (this.chartdata[i].status == 'active') {
          this.colordata.push("green");
          this.actcount++;
        } else {
          this.colordata.push("red");
          this.inactcount++;
        }
      }
      this.totalnum.push(this.actcount);
      this.totalnum.push(this.inactcount);
      console.log(this.totalnum)
    })
  }

  //Donut Chart  
  chartSeries: ApexNonAxisChartSeries = this.totalnum;
  chartDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: false
    },
    height: '300px'
  }
  chartTitle: ApexTitleSubtitle = {
    text: "Active Employess",
    align: "center"
  }
  chartColors: ApexFill = {
    colors: this.colordata
  }
}
