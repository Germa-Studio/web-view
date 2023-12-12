import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

function ApexChart (props){
  let {dataSingkong,dataKedelai,dataTembakau,dataPadi} = props
  console.log("isi "+dataSingkong)
  const [series, setSeries] = useState([
    {
      name: "Singkong",
      data: dataSingkong
    },
    {
      name: 'Kedelai',
      data: dataKedelai
    },
    {
      name: 'Tembakau',
      data: dataTembakau
    },
    {
      name: 'Padi',
      data: dataPadi
    },
  ]);

  const options = {
    series,
    chart: {
      id: 'realtime',
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
