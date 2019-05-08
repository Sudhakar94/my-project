import React, { Component } from 'react';

import Chart from './Chart'
import './chartStyle.css';

class Barchart extends Component {
    request = (a, b) => {
        this.props.dataCall(a, b);
    }
    componentWillReceiveProps(nextProps, nextContext) {
      this.setState(
      )
    }

  render() {
      let formattedData = [];
      this.props.responseData.map((item, key) => {
            formattedData.push({
              "name": item.name,
              "data": [item.open, item.scheduled]
            })
            return 0;
        });
    const temp = this;
    let data = {
      "series": formattedData 
    }
    const Config = {
      colors: ['#02B7A8', '#65E893'],
      title: {
        text: "OPEN / SCHEDULED JOBS",
        x: 5,
        y: 25,
        style: {
          color: '#707070',
          fontWeight: 'bold',
          fontFamily: 'segoe',
          fontSize: '12px',
          letterSpacing: '1px'
        }
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          pointWidth: 6,
          pointPadding: 5,
          point: {
            events: {
              click: function () {
                  temp.request(this.category, this.series.name);
              }
            }
          }
        },
        column: {
          states: {
            /*hover: {
              color: 'red',
              borderColor: 'green',
              borderWidth: 5,
            },*/
          },
        },
      },
      xAxis: {
        categories: [
          "Open",
          "Scheduled"
        ],
        title: {
          //enabled: false
        }
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: -15,
        y: 50,
        symbolPadding: 0,
        symbolHeight: 0.1,
        symbolRadius: 0,
        useHTML: true,
        symbolWidth: 0,
        labelFormatter: function() {
          if(this.name === "Service Jobs"){
            return '<div >' +
                '<span style="margin-right:10px">' +
                '<img src = "./service_jobs.svg" ">' +
                '</span>' +
                '<span style="font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">Open: '+ this.yData[0]  + '</p>' +
                '<p style="margin: 3px 0 20px 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">Scheduled: '+ this.yData[1]  + ' </p>' +
                '</div>';
          }
          if(this.name === "Emergency Jobs"){
            return '<div >' +
                    '<span style="margin-right:10px">' +
                    '<img src = "./emergency_jobs.svg" ">' +
                    '</span>' +
                '<span style="font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">Open: '+ this.yData[0]  + '</p>' +
                '<p style="margin: 3px 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">Scheduled: '+ this.yData[1]  + ' </p>' +
                    '</div>';
          }

        },/*
        itemStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '19px'
        }*/
      },
      chart: {
        type: 'column',
        renderTo: "barChart",
        height: 234,
        width: 320,
        marginTop: 70,
        marginBottom: 25,
        marginRight: 140
      },
    };

    return (
      <div id="barChart" className="barContainer chartDiv">
        <Chart options={Config} data={data} type="bar" />
      </div>
    );
  }
}

export default Barchart;
