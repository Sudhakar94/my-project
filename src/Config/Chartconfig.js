const options = {
      plotOptions: {
        series: {
            cursor: 'pointer',
            pointWidth: 6,
            borderRadius: 5,
            pointPadding: 5,
            point: {
                events: {
                    click: function () {}
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
      chart: {
        type: 'column',
          renderTo: "barChart",
          height: 400,
          width: 300,
      },
    };

export default options;