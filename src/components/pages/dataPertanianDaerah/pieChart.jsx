import React from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
  const series = [44, 55, 13, 43, 22];

  const options = {
    series,
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Padi', 'Jagung', 'Kedelai', 'Singkong', 'Tembakau'],
    legend: {
    position: 'right',
    fontSize:"20px",
    inverseOrder:true,
    markers: {
        radius:0,
        width:17,
        height:17
        },
    },
    itemMargin: {
        horizontal: 20,
        vertical: 20
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          }
        },
      },
    ],
  };

  React.useEffect(() => {
    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();
    
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" />;
};

export default ApexChart;
