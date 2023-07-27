import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Singkong',
      data: [
        40,
        15,
        8,
        23,
        24,
        31,
        45,
        12,
        48,
        85,
      ],
    },
    {
      name: 'Kedelai',
      data: [
        14,
        10,
        20,
        18,
        14,
        31,
        29,
        14,
        42,
        23,
      ],
    },
    {
      name: 'Tembakau',
      data: [
        12,
        21,
        18,
        14,
        24,
        22,
        25,
        12,
        14,
        11,
      ],
    },
    {
      name: 'Padi',
      data: [
        24,
        12,
        27,
        38,
        24,
        43,
        12,
        32,
        21,
        32,
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
      categories: ['Januari','Febuari','Maret','April','Mei','Juni','Juli','Agustus','September','Desember'],
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
