import React, { Component } from 'react';

import Chart from './Chart'
import './chartStyle.css';

class Donutchart extends Component {

    request = (a) => {
        this.props.dataCall(a);
    };
    render() {
        const temp = this;
        const data = {
                data: [["Service Jobs",20],["Emergency Jobs",50]]
        };
        let count = 0;
        data.data.map((item, key) => {
            if (item[1] === 0) {
                count++;
            }
            return 0;
        });
        const Config = {
            colors: ['#02B7A8', '#65E893'],
            title: {
                text: "SERVICE JOBS | EMERGENCY JOBS",
                x: 5,
                y: 25,
                align: 'center',
                style: {
                    color: '#707070',
                    fontWeight: 'bold',
                    fontFamily: 'segoe',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    
                }
            },
            plotOptions: {
                pie: {
                    center: [70, 80],
                    shadow: false
                }
            },

            series: [{
                data:[],
                cursor: 'pointer',
                size: '100%',
                innerSize: '80%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                },
                point: {
                    events: {
                        click: function () {
                            temp.request(this.name);
                        }
                    }
                }
            }],
            legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                x: -10,
                y: 50,
                symbolPadding: 0,
                symbolHeight: 0.1,
                symbolRadius: 0,
                useHTML: true,
                marginRight: '30px',
                symbolWidth: 0,
                labelFormatter: function() {
                    if(this.name === "Service Jobs"){
                        return '<div >' +
                            '<span style="margin-right:10px">' +
                            '<img src = "./service_jobs.svg" ">' +
                            '</span>' +
                            '<span  style="font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                            '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">'+ this.y  + '</p>' +
                            '</div>';
                    }
                    if(this.name === "Emergency Jobs"){
                        return '<div >' +
                            '<span style="margin-right:10px">' +
                            '<img src = "./emergency_jobs.svg" ">' +
                            '</span>' +
                            '<span style="margin: 20px 0 0 0;display:inline-block;font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                            '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">'+ this.y  + '</p>' +
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
                type: 'pie',
                renderTo: "donutChart",
                height: 234,
                width: 320,
            },
        };

        return (
            <div id="donutChart" className="barContainer chartDiv">
                <Chart options={Config} data={data.data} noData={count === 2 ? true : false} type="donut" />
            </div>
        );
    }
}

export default Donutchart;