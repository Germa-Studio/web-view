import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Singkong',
      data: [
        [new Date('2022-01-01').getTime(), 40],
        [new Date('2022-01-02').getTime(), 15],
        [new Date('2022-01-03').getTime(), 8],
        [new Date('2022-01-04').getTime(), 23],
        [new Date('2022-01-05').getTime(), 24],
        [new Date('2022-01-06').getTime(), 31],
        [new Date('2022-01-07').getTime(), 45],
        [new Date('2022-01-08').getTime(), 12],
        [new Date('2022-01-09').getTime(), 48],
        [new Date('2022-01-10').getTime(), 85],
      ],
    },
    {
      name: 'Kedelai',
      data: [
        [new Date('2022-01-01').getTime(), 14],
        [new Date('2022-01-02').getTime(), 10],
        [new Date('2022-01-03').getTime(), 20],
        [new Date('2022-01-04').getTime(), 18],
        [new Date('2022-01-05').getTime(), 14],
        [new Date('2022-01-06').getTime(), 31],
        [new Date('2022-01-07').getTime(), 29],
        [new Date('2022-01-08').getTime(), 14],
        [new Date('2022-01-09').getTime(), 42],
        [new Date('2022-01-10').getTime(), 23],
      ],
    },
    {
      name: 'Tembakau',
      data: [
        [new Date('2022-01-01').getTime(), 12],
        [new Date('2022-01-02').getTime(), 21],
        [new Date('2022-01-03').getTime(), 18],
        [new Date('2022-01-04').getTime(), 14],
        [new Date('2022-01-05').getTime(), 24],
        [new Date('2022-01-06').getTime(), 22],
        [new Date('2022-01-07').getTime(), 25],
        [new Date('2022-01-08').getTime(), 12],
        [new Date('2022-01-09').getTime(), 14],
        [new Date('2022-01-10').getTime(), 11],
      ],
    },
    {
      name: 'Padi',
      data: [
        [new Date('2022-01-01').getTime(), 24],
        [new Date('2022-01-02').getTime(), 12],
        [new Date('2022-01-03').getTime(), 27],
        [new Date('2022-01-04').getTime(), 38],
        [new Date('2022-01-05').getTime(), 24],
        [new Date('2022-01-06').getTime(), 43],
        [new Date('2022-01-07').getTime(), 12],
        [new Date('2022-01-08').getTime(), 32],
        [new Date('2022-01-09').getTime(), 21],
        [new Date('2022-01-10').getTime(), 32],
      ],
    },
  ]);

  const options = {
    series,
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    // title: {
    //   text: 'Stock Price Movement',
    //   align: 'left',
    // },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val;
        },
      },
      title: {
        text: 'Perkiraan Panen (KW)',
      },
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(document.getElementById('chart1'), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart1" className=' w-full'/>;
};

export default ApexChart;
