import React, { Component } from 'react';
import Highcharts from 'highcharts'


class Chart extends Component {

  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    const data = this.props.data;
    let chartOptions;
     if (this.props.type === "bar")
     {
       chartOptions =  {...this.props.options, ...data}
     } else if (this.props.type === "donut") {
       this.props.options.series[0].data = data;
       chartOptions =  this.props.options;
     }
    this.chart = new Highcharts['Chart'](
      this.chartContainer.current,
      chartOptions
    )
    if (this.props.type === "donut" && this.props.noData === true) {
      this.chart = new Highcharts['Chart'](
      this.chartContainer.current,
      chartOptions
    ).renderer.image('https://www.highcharts.com/samples/graphics/sun.png', 100, 100, 30, 30)
    .add();
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

export default Chart;