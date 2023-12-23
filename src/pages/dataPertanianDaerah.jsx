import React from 'react'
import { Component } from 'react';
import MainCard from "../components/MainCard";
import PieChart from "../components/pages/dataPertanianDaerah/pieChart";
import MatrixChart from "../components/pages/dataPertanianDaerah/matrixChart";
import Tabel from "../components/pages/dataPertanianDaerah/tabel";
import { useEffect, useState } from "react";
import { dataSingkong } from "../components/pages/dataPertanianDaerah/data";
import { dataKedelai } from "../components/pages/dataPertanianDaerah/data";
import { dataTembakau } from "../components/pages/dataPertanianDaerah/data";
import { dataPadi } from "../components/pages/dataPertanianDaerah/data";

export default function DataPertanianDaerah() {
  const [singkong, setDataSingkong] = useState(dataSingkong);
  const [kedelai, setDataKedelai] = useState(dataKedelai);
  const [tembakau, setDataTembakau] = useState(dataTembakau);
  const [padi, setDataPadi] = useState(dataPadi);
  const [time, setTime] = useState(new Date());

  const fetchData = async() => {
    const randMonth = parseInt(Math.random() * (12 - 1) + 1);;
    let randNumber = Math.floor(Math.random() * 10);
    
    dataSingkong[randMonth-1] += randNumber;
    randNumber = Math.floor(Math.random() * 10);
    dataKedelai[randMonth-1] += randNumber;
    randNumber = Math.floor(Math.random() * 10);
    dataTembakau[randMonth-1] += randNumber;
    randNumber = Math.floor(Math.random() * 10);
    dataPadi[randMonth-1] += randNumber;

    setDataSingkong(dataSingkong)
    setDataKedelai(dataKedelai)
    setDataTembakau(dataTembakau)
    setDataPadi(dataPadi)
  }

  useEffect(() => {
    const timer = setInterval(() => {
        fetchData()
    }, 5000);
    return () => { clearInterval(timer) }
}, [])

useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="pb-5 max-w-[90%] mx-auto">
      <MainCard transparent noPadding>
        <MainCard transparent noPadding row center>
          <MainCard transparent width="30%">
            <h2 className="text-center">Musim Tanam Seluruh Komoditas</h2>
            <PieChart />
          </MainCard>
          <MainCard transparent width="60%">
            <h2 className="text-center">
              STATISTIK PERTUMBUHAN PERTANIAN DALAM 1 TAHUN
            </h2>
            <h5>{time.toLocaleString()}</h5>
            <h5>{singkong}</h5>
            <MatrixChart dataSingkong={singkong} dataKedelai={kedelai} dataTembakau={tembakau} dataPadi={padi} />
          </MainCard>
        </MainCard>
        <MainCard transparent noPadding row center>
          <Tabel />
        </MainCard>
      </MainCard>
    </section>
  );
}
