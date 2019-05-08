import React, { Component } from 'react';

import Chart from './Chart'
import './chartStyle.css';

class DonutThreeSeries extends Component {

    request = (a) => {
        this.props.dataCall(a);
    };
    render() {
        const temp = this;
        const data = {
                data: [["Open",250],["Scheduled",84],["Parts Pending",44]]
        };
        const Config = {
            colors: ['#1CC3E7', '#1662A6', '#8B9CA4'],
            title: {
                text: "JOBS BY STATUS",
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
                x: -20,
                y: 50,
                symbolPadding: 0,
                symbolHeight: 0.1,
                symbolRadius: 0,
                useHTML: true,
                symbolWidth: 0,
                labelFormatter: function() {
                    if(this.name === "Open"){
                        return '<div >' +
                            '<span style="margin-right:10px">' +
                            '<img src = "./open_jobs.svg" ">' +
                            '</span>' +
                            '<span style="font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                            '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">'+ this.y  + '</p>' +
                            '</div>';
                    }
                    if(this.name === "Scheduled"){
                        return '<div >' +
                            '<span style="margin-right:10px">' +
                            '<img src = "./scheduled.svg" ">' +
                            '</span>' +
                            '<span style="margin: 20px 0 0 0;display:inline-block;font-family: Segoe;font-size: 12px;color: #4D4F5C;font-weight: bold;vertical-align: 3px;">' +this.name + '</span>' +
                            '<p style="margin: 0 0 0 26px;font-family: Segoe;font-size: 11px;color: #4D4F5C;font-weight: normal;">'+ this.y  + '</p>' +
                            '</div>';
                    }
                    if(this.name === "Parts Pending"){
                        return '<div >' +
                            '<span style="margin-right:10px">' +
                            '<img src = "./parts_pending.svg" ">' +
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
                renderTo: "DonutThreeSeries",
                height: 234,
                width: 320,
            },
        };

        return (
            <div id="DonutThreeSeries" className="barContainer">
                <Chart options={Config} data={data.data} type="donut" />
            </div>
        );
    }
}

export default DonutThreeSeries;