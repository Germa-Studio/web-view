// import React from 'react'
import MainCard from "../components/MainCard";
import PieChart from "../components/pages/dataPertanianDaerah/pieChart";
import MatrixChart from "../components/pages/dataPertanianDaerah/matrixChart";
import Tabel from "../components/pages/dataPertanianDaerah/tabel";
export default function DataPertanianDaerah() {
  return (
    <section className="pb-5">
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
            <MatrixChart />
          </MainCard>
        </MainCard>
        <MainCard transparent noPadding row center>
          <Tabel />
        </MainCard>
      </MainCard>
    </section>
  );
}
