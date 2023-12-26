import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexTitleSubtitle } from 'ng-apexcharts';
import { EmpleaveService } from 'src/app/services/empleave.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  constructor(private data: EmpleaveService) { }
  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth() + 1;
  june: any
  ngOnInit(): void {
    // console.log("month" + this.currentYear)
    // console.log("year" + this.currentMonth)
    this.june = this.getDaysInMonth(2023, 2)
    // console.log("June:" + this.june)
    console.log(this.date);

  }

  // Barchart data
  chartSeries: ApexAxisChartSeries =
    [{
      data: [{
        x: "Aravind",
        y: '2'
      }, {
        x: "Mathew",
        y: '1'
      }, {
        x: "David",
        y: '4'
      }, {
        x: "Marvi",
        y: '2'
      }, {
        x: "Sreya",
        y: '2'
      }, {
        x: "theigo",
        y: '1'
      }, {
        x: "karthika",
        y: '3'
      }, {
        x: "adrian",
        y: '1'
      },]
    }]
  chartDetails: ApexChart = {
    type: 'bar',
    toolbar: {
      show: false
    },
    height: '300px'
  }
  chartTitle: ApexTitleSubtitle = {
    text: "Number of Leaves per month",
    align: "center"
  }

  getDaysInMonth(year: any, month: any) {
    return new Date(year, month, 0).getDate();
  }

}
